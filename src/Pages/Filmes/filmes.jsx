import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import imgFilme from "../../Assets/Img/rolofilme.png"


import './filmes.css'
import { apiFilmes } from "../../Services/api";
import ModalFilmes from "../../Components/ModalFilmes/modalFilmes"



export const Filmes = () =>{

    let header3 = {
        descricao: "Cadastre os filmes de sua preferência "
    }
    const [modal, SetModal] = useState('hide')
    const [idGeneros, setIdGeneros] = useState(0)
    const [idFilmes, setIdFilmes] = useState(0)

    const AbrirFecharModal = (estadoAtual,idGenero, idFilme) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }
        else
        {
            SetModal('hide')
        }
        
        setIdGeneros(idGenero)
        setIdFilmes(idFilme)
        setGeneros(genero)
        console.log(idGeneros);
        
        window.scroll({top: 150,left: 0,behavior: 'smooth'});
    }

    //GET
    const [genero, setGeneros] = useState([])
    const [movie, setMovies] = useState([])

    const listarGeneros = () =>
    {
        apiFilmes.get('Genero')
        .then(result => {
            setGeneros(result.data)
        })
    }

    const listarFilmes = () => {}

    useEffect(() => {
        listarGeneros()
    }, [])
    
    useEffect(() => {
        listarFilmes()
        for (let index = 0; index < genero.length; index++) {
            apiFilmes.get(`Genero/${index + 1}/Filme`)
                .then(resultado => {
                    setMovies(filme => filme.concat(resultado.data))
                })
        }
        
    }, [genero])
    
    useEffect(() => {
    }, [movie])

    //POST

    const [register, setRegister] = useState('')
    const [select, SetSelect] = useState(0)

    const Registrar = (idGenero) =>
    {
        apiFilmes.post(`Genero/${idGenero}/Filme`, {nomeFilme: register})
        .then(() => setRegister(''))
        .then(() => {window.location.reload()})
    }

    //DELETE

    const Excluir = (idGenero, idFilme) => {
            apiFilmes.delete(`Genero/${idGenero}/Filme/${idFilme}`)
            .then(() => {window.location.reload()})}

    //Corpo do Site
    
    return(
        <>
        <Header objeto={header3}/>
        <main>
            <div className="topico_principal">
                <h1 className="h1_filmes">Filmes</h1>
                <img src={imgFilme} alt="Rolo de filme" />
            </div>

            <p className="cadastrar_titulo">Cadastrar Filmes</p>
            <div className="alinhamento_input_filmes">

                <div>
                    <input className="input_filme"
                     type="text" id="inputFilme"
                      placeholder="Título do Filme"
                      value={register}
                      onChange={(estadoInput) => setRegister(estadoInput.target.value)}/>
                </div>

                <div>
                    <select required
                     onChange={(estadoDoSelect) => SetSelect(Number(estadoDoSelect.target.value))}>

                        <option value="" hidden disabled selected>Gênero</option>

                        {genero.map((item) => {
                            return(<option className="select_values" value={item.idGenero}>{item.valueGenero}</option>)
                        })}
                    </select>
                </div>

                <div>
                    <button className="btn_salvar" onClick={() => {Registrar(select)}}>Salvar</button>
                </div>
            </div>

            <ModalFilmes mostrar={modal} funcao={AbrirFecharModal} idGenero={idGeneros} idFilme={idFilmes}/>

                {movie.map((item) =>{
                    return(
                        <>
                            <div className="div_pai_card1">
                                <div>
                                    <p className="text_map">{item.nomeFilme}</p>
                                </div>

                                <div className="div_position_map">
                                    <p className="text_map">{item.genero.valueGenero}</p>
                                </div>

                                <div>
                                    <div className="espaco_botao2">
                                        <button className="btn_editar" onClick={ () => {AbrirFecharModal(modal ,item.genero.idGenero ,item.idFilme)} }>Editar</button>
                                        <button className="btn_excluir" onClick={() => Excluir(item.genero.idGenero, item.idFilme)}>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    );

                })}
                <div className={"fundo_escurecido " + modal} ></div>
        </main>
        <Footer/>
        </>
    );

}
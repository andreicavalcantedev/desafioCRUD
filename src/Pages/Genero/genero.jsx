import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import Mascara from "../../Assets/Img/mascara.png"
import { apiFilmes } from "../../Services/api";
import ModalGenero from "../../Components/ModalGenero/modalGenero"

import './genero.css'

export const Genero = (props) =>{

    let header4 = {
        descricao: "Cadastre os gêneros dos filmes"
    }

    const [getId, setGetId] = useState(0)
    const [modal, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual, idGenero) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }
        else
        {
            SetModal('hide')
        }

        setGetId(idGenero)

        window.scroll({top: 150,left: 0,behavior: 'smooth'});
    }

    const [genero, setGenero] = useState([])

    // listar API
    const ListarGeneros = () =>
    {
        apiFilmes.get('Genero')
        .then(result => {
            setGenero(result.data)
        })
    }

    useEffect(() =>{
        ListarGeneros()
    }, [])

    // POST

    const [register, setRegister] = useState('')

    const Registrar = () =>
    {
        apiFilmes.post('Genero', {valueGenero: register})
        .then(() => setRegister(''))
        .then(() => {window.location.reload()})
    }

    //DELETE

    const Excluir = (idGenero) => {
            apiFilmes.delete(`Genero/${idGenero}`)
            .then(() => {window.location.reload()})
    }

    return(
        <>
        <Header objeto={header4}/>
        <main>
            <div className="topico_principal">
                <h1 className="h1_filmes">Gêneros</h1>
                <img src={Mascara} alt="Mascara (Simbolo do teatro/cinema)" />
            </div>

            <p className="cadastrar_titulo">Cadastrar Filmes</p>
            <div className="alinhamento_input_filmes">

                <div>
                    <input 
                    className="input_filme" 
                    type="text" 
                    placeholder="Gênero" 
                    value={register} 
                    onChange={(estadoInput) => setRegister(estadoInput.target.value)} />
                </div>

                <div>
                    <button className="btn_salvar" onClick={() => Registrar()}>Salvar</button>
                </div>
            </div>

           <ModalGenero mostrar={modal} funcao={AbrirFecharModal} idGenero={getId}/>
            
            
                            {genero.map((item) => {
                                
                            return(
                            <>
                                <div className="div_pai_card1">

                                
                                    <div>
                                        <p className="text_map">{item.valueGenero}</p>
                                    </div>


                                    <div className="espaco_botao2">
                                        <button className="btn_editar" onClick={ () => {AbrirFecharModal(modal, item.idGenero)} }>Editar</button>
                                        <button className="btn_excluir" onClick={() => Excluir(item.idGenero)}>Excluir</button>
                                    </div>
                                </div>
                            </>
                            );
                        })} 
                         <div className={"fundo_escurecido " + modal} ></div>
        </main>
        <Footer/>
        </>
    )
}
import React, { useEffect, useState } from "react";
import './modalFilmes.css';
import { apiFilmes } from "../../Services/api";
import footer from "../../Assets/Img/footer.png"

export const Modal = (props) => {

    const [register, setRegister] = useState('')
    const [select, SetSelect] = useState('')
    const [genero, setGeneros] = useState([])

    const listarGeneros = () =>
    {
        apiFilmes.get('Genero')
        .then(result => {
            setGeneros(result.data)
        })
    }

    useEffect(() => {
        listarGeneros()
    }, [])

    const Editar = (idGenero, idFilme) =>{

        if(select === '')
        {
            let guardar = props.idGenero
            apiFilmes.put(`Genero/${idGenero}/Filme/${idFilme}`, {nomeFilme: register, idGenero: guardar})
            .then(() => window.location.reload())
        }
        else
        {
            apiFilmes.put(`Genero/${idGenero}/Filme/${idFilme}`, {nomeFilme: register, idGenero: select})
            .then(() => window.location.reload())
        }
    }

    return(
        <div className={"modal " +props.mostrar}>

            <div>
                <div className="header_modal">

                    <div className="div_pai_elements">

                        <div className="div_modal_title">
                            <p className="text_edit_modal">Edite seus Filmes</p>
                        </div>

                        <div className="div_modal_btn_close">
                            <button className="close_modal" onClick={props.funcao}>X</button>
                        </div>
                    </div>
                </div>
                    <div className="div_pai_filmes">

                        <div>
                            <input 
                            type="text" 
                            className="input_filme_modal"
                            defaultValue={register}
                            onChange={(e) => setRegister(e.target.value)}
                            placeholder="Edite o Genêro do Filme"/>
                        </div>

                        <select 
                            required
                            className="select_filmes_modal"
                            value={select}
                            onChange={(estadoDoSelect) => {SetSelect(estadoDoSelect.target.value)
                            console.log(select);}}>
                            <option hidden disabled defaultValue>Gênero</option>
                            {genero.map((item) => {
                                return(<option className="select_values" value={item.idGenero} key={item.idGenero}>{item.valueGenero}</option>);
                            })}
                                
                        </select>


                        <div className="btn_position_modal">
                            <button className="btn_salvar" onClick={() => Editar(props.idGenero, props.idFilme)}>Editar</button>
                        </div>
                        
                    </div>
                    

                <div className="footer_modal">
                    <img src={footer} alt="Logo do site Filmes Collection" className="img_position_modal" />
                </div>

            </div>

            
            
        </div>
    );

}

export default Modal;
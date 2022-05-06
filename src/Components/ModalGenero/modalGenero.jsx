import React, { useState } from "react";
import './modalGenero.css';
import { apiFilmes } from "../../Services/api";
import footer from "../../Assets/Img/footer.png"

export const Modal = (props) => {

    const [register, setRegister] = useState('')

    const Editar = (idGenero) =>{
        apiFilmes.put(`Genero/${idGenero}`, {valueGenero: register})
        .then(() => window.location.reload())
    }

    return(
        
        <div className={"modal " +props.mostrar}>
            <div>
                <div className="header_modal">

                    <div className="div_pai_elements">

                        <div className="div_modal_title">
                            <p className="text_edit_modal">Edite seus Genêros</p>
                        </div>

                        <div className="div_modal_btn_close">
                            <button className="close_modal" onClick={props.funcao}>X</button>
                        </div>
                    </div>
                </div>
                    <div className="div_pai_inputs">
                            <input 
                            type="text" 
                            className="input_filme"
                            defaultValue={register}
                            onChange={(e) => setRegister(e.target.value)}
                            placeholder="Edite o Gênero do Filme"/>
                        <button className="btn_salvar" onClick={() => Editar(props.idGenero)}>Editar</button>
                    </div>
                    

                <div className="footer_modal">
                    <img src={footer} alt="Logo do site Filmes Collection" className="img_position_modal" />
                </div>

            </div>
        
            
        </div>
    );

}

export default Modal;
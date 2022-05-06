import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

import './usuario.css'

export const Usuario = () =>{
    
    let header2 = {
        descricao: "Faça o Cadastro de usuários e  edite, caso necessário",
        segundadescricao:"Pronto para cadastrar?"
    }

    return(
        <>
            <Header objeto={header2}/>
                <main>
                    <p className="titulo_usuarios">Cadastro</p>

                    <div className="inputs_alinhamento">
                        <div>
                            <label className="labels">Nome
                                <input className="inputs" type="text" name=""/>
                            </label>
                        </div>

                        <div>
                            <label className="labels">E-mail
                                <input className="inputs" type="email" name=""/>
                            </label>
                        </div>

                        <div>
                            <label className="labels">Telefone
                                <input className="inputs" type="text" name="telefone"/>
                            </label>
                        </div>

                    </div>
                    <button className="btn_cadastrar">Cadastrar</button>

                    <div className="div_pai_card">

                        <div>
                            <p className="padding_text_coluna">Paulo Andre</p>
                            <p className="padding_text">Marcos Lucio</p>
                            <p>Laura Port</p>
                        </div>
                        <div className="linha2">
                            <p className="padding_text_coluna">paulo@email.com</p>
                            <p className="padding_text">marcos@email.com</p>
                            <p>laura@email.com</p>
                        </div>
                        <div>
                            <p className="padding_text_coluna">3349 6788</p>
                            <p className="padding_text">3349 6788</p>
                            <p>3349 6788</p>
                        </div>
                        <div>
                            <div>
                                <button className="btn_editar">Editar</button>
                                <button className="btn_excluir">Excluir</button>
                            </div>
                            <div className="espaco_botao">
                                <button className="btn_editar">Editar</button>
                                <button className="btn_excluir">Excluir</button>
                            </div>
                            <div className="espaco_botao2">
                                <button className="btn_editar">Editar</button>
                                <button className="btn_excluir">Excluir</button>
                            </div>
                        </div>
                    </div>


                </main>
            <Footer/>
        </>
    );

}
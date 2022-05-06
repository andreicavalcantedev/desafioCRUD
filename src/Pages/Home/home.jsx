import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import imgFilme from "../../Assets/Img/rolofilme.png"
import imgMascara from "../../Assets/Img/mascara.png"

import './home.css'

let header1 = {
    descricao: "Conheça nossa Coletânea"
}

export class Home extends React.Component{

    render(){

        return(
            <>
                <Header objeto={header1}/>
                <main>
                    <h1 className="h1_homepage">Monte sua coletânea de filmes...</h1>
                    <p className="titulo_homepage">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</p>
                    <br></br>
                    <p className="texto_info_principal">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                    <div className="alinhamento_cards">
                        <div>
                            <div>
                                <img src={imgFilme} alt="Rolo de filme" />
                            </div>

                            <p className="subtitulos_homepage">Filmes</p>
                            <br></br>
                            <p className="subtitulo_card">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                        </div>

                        <div>
                            <div>
                                <img src={imgMascara} alt="Mascaras (Simbolo do teatro)" />
                            </div>
                            
                            <p className="subtitulos_homepage">Categoria</p>
                            <br></br>
                            <p className="subtitulo_card">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </main>
                <Footer/>
            </>
        )

    }

}
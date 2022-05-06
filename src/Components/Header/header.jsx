import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../Assets/Img/logo.png"
import './header.css'

export const Header = (props) =>
{
    return(
        <div>
            <div className="header">
                <div className="header_alinhamento">

                    <div>
                        <img className='img_espaco' src={Logo} alt="Logo Filmes Collection" />
                        <p className='props_descricao'>{props.objeto.descricao}</p>
                        <p className='props_cadastro'>{props.objeto.segundadescricao}</p>
                    </div>

                    <div className="alinhamento_texto">
                        <Link to='/'>Home</Link>
                        <br></br>
                        <Link className="padding" to='/Usuario'>Usuários</Link>
                        <Link to='/Filmes'>Filmes</Link>
                        <br></br>
                        <Link className="padding_last" to='/Genero'>Gênero</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
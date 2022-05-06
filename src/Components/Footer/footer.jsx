import React from "react";
import logo1 from "../../Assets/Img/footer.png"

import './footer.css'

export const Footer = () =>
{
    return(
        <div>
            <div className="footer">
                <img className="logo_alinhamento" src={logo1} alt="Logo Filmes Collection" />
                <div className="vertical"></div>
                <p className="footer_text">Company Inc, 8901 Marmora Road, Glasgow, D04 89GR<br></br><br></br>
                Call us now toll free: (800)2345-6789<br></br><br></br>
                Customer support:support@demolink.org<br></br><br></br>
                Skype: sample-username<br></br><br></br></p>
                
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';

import {FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer__container">
            <ul className="social__container">
                <li  className="item item-text"><p className="text">Social media</p></li>
                <li className="item item1"><a href="https://www.facebook.com/mihail.muscalita/"><FaFacebook/></a></li>
                <li className="item item2"><a href="https://github.com/mihailmuscalita"><FaGithub/></a></li>
                <li className="item item3"><a href="https://www.linkedin.com/in/mihail-muscalita/"><FaLinkedin/></a></li>
            </ul>
        </div>
    );
}

export default Footer;
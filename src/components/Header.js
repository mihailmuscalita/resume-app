import React, { useState } from 'react';

import './Header.css'

function Header(props) {

    const [toggleActive, setToggleActive] = useState(false);

    const onToggleClick = () =>{
        toggleActive == false ? setToggleActive(true) : setToggleActive(false);
        console.log(toggleActive);
    }

    return <>
        <nav className="nav__container">
            <ul className="nav__bar">
                <div className="__logo_container">
                    <li className="__logo"><a className="__logoref" href="#">MihailMuscalita-Resume.com</a></li>
                </div>
                <div className="__list_container">
                    <li className="__item"><a href="#">Home</a></li>
                    <li className="__item"><a href="#">About me</a></li>
                    <li className="__toggle" onClick={onToggleClick}>
                        <span class="bars"></span>
                    </li>
                </div>
            </ul>
        </nav>
    </>;
}

export default Header;
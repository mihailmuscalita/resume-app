import React, { useEffect, useState } from 'react';

import './Header.css'

function Header(props) {

    const [innerScreenWidth, setInnerScreenWidth] = useState(window.innerWidth);
    const [toggleActive, setToggleActive] = useState(false);

    const onToggleClick = () =>{
        setToggleActive(!toggleActive);
    }

    useEffect(() =>{
        const onChangeWidth = () =>{
            setInnerScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", onChangeWidth);

        return () =>{
            window.removeEventListener("resize",onChangeWidth);
        }

    }, []);

    return <>
        <nav className="nav__container">
            <ul className="nav__bar">
                <div className="__logo_container">
                    <li className="__logo"><a className="__logoref" href="#">Muscalita Mihail</a></li>
                </div>
                <div className="__list_container">
                    {(toggleActive || innerScreenWidth>500) && 
                    (<li className="__item"><a href="#">Experience</a></li>
                     )}
                    {(toggleActive || innerScreenWidth>500) && 
                    (<li className="__item"><a href="#">About me</a></li>
                     )}
                    {innerScreenWidth < 500 &&
                    (<li className="__toggle" onClick={onToggleClick}>
                    <span class="bars"></span>
                    </li>)}
                </div>
            </ul>
        </nav>
    </>;
}

export default Header;
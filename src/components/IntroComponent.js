import React,{useState} from 'react';

import {FaGripLines} from 'react-icons/fa';
import './IntroComponent.css';

function IntroComponent(props) {

    const [title, setTitle] = useState("Me as a Software Engineer");

    const changeTitle = () =>{
        if (title == "Me as a Software Engineer")
            setTitle("How I become a Software Engineer")
        else
            setTitle("Me as a Software Engineer");
    }

    return (
        <div className="intro__container">
            <div className="intro__title">
                <div className="title__container">
                    <p className="__title" onClick={changeTitle}>{title}</p>
                </div>
                <div className="icon__container">
                    <span><FaGripLines/></span>
                </div>
            </div>
            <div className="intro__description">
                <span className="__description">I finished the Faculty of Computer Science in Cluj-Napoca at Babes Bolyiai university.
                      In my second year of studying I was hired after an internship of 2 months.
                      Since, that moment I started my career as a Software Engineer trying to propose best
                      solutions in every project that I was a part of.
                </span>
            </div>
        </div>
    );
}

export default IntroComponent;
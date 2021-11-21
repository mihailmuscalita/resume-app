import React from 'react';

import profileImage from '../assets/images/profile.jpg';
import './ImageContainer.css';

function ImageContainer(props) {
    return (
        <div className="parrent__image__container">
            <div className="image__container">
                <img className="__profile__image" src={profileImage} alt=""/>
            </div>
            <div className="__product__container">
                <p className="__product">Product development</p>
            </div>
            <div className="__problem__solver">
                <p className="__solver">Problem solver</p>
            </div>
            <div className="__motivation__container">
                <p className="__motivation">Motivation to learn</p>
            </div>
            <div className="__code__container">
                <p className="__code">Code analysis</p>
            </div>
            <div className="__attention__container">
                <p className="__attention">Attention to detail</p>
            </div>
            <div className="__selflearner__container">
                <p className="__learner">Self-learner people</p>
            </div>
        </div>
    );
}

export default ImageContainer;
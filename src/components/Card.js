import React from 'react';

import './Card.css';

function Card({title,description}) {
    return (
        <div className="card__container">
            <div className="inner__card__container">
                <p className="card__title">{title}</p>
                <span className="card__description">{description}</span>
            </div>
        </div>
    );
}

export default Card;
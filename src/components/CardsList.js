import React from 'react';
import Card from './Card';

import './CardsList.css';

function CardsList(props) {
    return (
        <div className="cardlist__container">
            <Card title="Commercial projects" 
                  description="I was a part of a commercial project deployed in Switzerland
                               dedicated to Swiss German speaking Counties. The project was focused
                               to help people that are not able to accomplish their basic needs.
                               I worked with different teams around the Europe in order to delivery
                               my work. The product owner was in Basel, Switzerland."/>
            <Card title="Personal projects" 
                  description="Undoubtedly, it is important to work on a commercial
                               project but it is also important to develop your own
                               projects. I'm a self-learner and driven and I developed some
                               applications for myself in order to achieve better knowledge
                               about different programming languages/tools."/>
            <Card title="Myself" 
                  description="I love to set goals for myself because I'm that kind of
                               person which really want to know for what I'm aiming for.
                               I do my best because I love what I do and I'm trying
                               to push myself to the next level every day. I think that 
                               quality matters not quantity."/>                   
        </div>
    );
}

export default CardsList;
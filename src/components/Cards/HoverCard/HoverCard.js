import React from 'react';

import classes from './HoverCard.module.css';
import Card from '../Card/Card';

const hoverCard = (props) => {
    let cards = null;
    if(props.cards){
        cards = props.cards.map((card,index)=>{
            if( card && card.type===props.type){
                return <Card key={index} name={card.name} url={card.url}/>;
            }
            return null;
        })
    }
    return (
        <div className={classes.box}>
            {cards}
         </div>
    );
}

export default hoverCard;
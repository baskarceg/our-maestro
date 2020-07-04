import React from 'react';
import classes from './Card.module.css';

const card = ( props ) => {
    return (
        <div className={classes.card}>
        <div className={classes.imgBx}>
            <img src={props.url} alt="images" />
        </div>
        <div className={classes.details}>
            <h2>{props.name}<br/><span>Director</span></h2>
        </div>
        </div>
    );
}

export default card;
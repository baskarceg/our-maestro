import React from 'react';

import classes from './MinimalCard.module.css';

const minimalCard = (props) => {
    return (
        <div className={classes.MinimalCard}>
            <div className="card" >
                <img src={props.link} className="card-img-top" alt="Photos" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default minimalCard;
import React from 'react';

import classes from './MinimalCard.module.css';

const minimalCard = (props) => {
    let contentArray = props.content.split('<br>');
    let content = contentArray.map(data=>{
        return <p>{data}</p>
    })
    return (
        <div className={classes.MinimalCard} >
            <div className="card" style={{boxShadow:"0 0 5px 2px"}}>
                <img src={props.link} className="card-img-top" alt="Photos" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default minimalCard;
import React from 'react';

import classes from './GroupCard.module.css';

const groupCard = (props) => {
    return (
        <div className={classes.GroupCard} onClick={() => props.groupClicked(props.groupName)}>
            <div className="card bg-dark text-white" >
                <img className="img-fluid" src={props.groupPhotoSrc} alt="" />
                <div className="card-img-overlay">
                    <h5 className="card-title"
                        style={{color:"rgb(56, 212, 233)",fontFamily:"Finger Paint"}}>
                        {props.groupName}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default groupCard;
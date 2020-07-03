import React from 'react';

import classes from './FamilyCard.module.css';

const familyCard = (props) => {
    return (
        <div className={classes.FamilyCard} onClick={() => props.photoClicked(props.name)}>
            <div className="card bg-dark text-white" >
                <img className="img-fluid" src={props.groupPhotoSrc} alt="" />
                <div className="card-img-overlay">
                    <h5 className="card-title"
                        style={{ color: "rgb(56, 212, 233)", fontFamily: "Finger Paint" }}>
                        {props.name}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default familyCard;
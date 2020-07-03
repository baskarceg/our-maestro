import React from 'react';

import classes from './Image.module.css';

const image = ( props ) => {
    return (
        <div className={classes.Image} >
            <div className="card bg-dark text-white" >
                <img className="img-fluid" src={props.photoSrc} alt="" />
            </div>
        </div>
    );
}

export default image;
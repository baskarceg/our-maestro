import React from 'react';

import classes from './DescriptiveCard.module.css';

const descriptiveCard = (props) => {
    return (
        <div className={classes.DescriptiveCard}>
            <div className={classes.ImageBorder}>
                <img className="img-fluid" src={props.imageUrl} alt="" />
            </div>
            <div className={classes.ContentBorder}>
                <h3>{props.name}</h3>
                <p style={{textAlign:"left"}}>asdhkajshdkjahsjkdhdkfmslkdflksjdlfkjslkdflksjdflkjslkdjfklsjdlfjslkdjflksjdfkljslkdjflksjdklfjslkdjfklsjdlkfjlksdjfkljskldjflksdlkfjskldjlksjdklfjslkdjfklsjdlkfjslkjdflksjdlfkjsdlkfjklkjahskjdhkjahjkdhaksjhdkjahskjdhakjshkdjhakjsdhkjahksjd</p>
            </div>
        </div>
    );
}

export default descriptiveCard;
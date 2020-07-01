import React from 'react';

import classes from './DescriptiveCard.module.css';

const descriptiveCard = (props) => {

    // console.log(typeof props.data);

    // let help = props.data.split('<br>');
    // console.log(help);
    // console.log(typeof help);
    // let para = help.map(data =>{
    //     console.log(data);
    //     return <p>{data}</p>;
    // })
    return (
        <div className={classes.DescriptiveCard}>
            <div className={classes.ImageBorder}>
                <img className="img-fluid" src={props.imageUrl} alt="" />
            </div>
            <div className={classes.ContentBorder}>
                <h3 style={{textAlign:"left",fontFamily:"Finger Paint"}}>{props.name}</h3>
                <p className={classes.Para} style={{textAlign:"left",fontFamily:"Finger Paint"}}>{props.data}</p>
            </div>
        </div>
    );
}

export default descriptiveCard;
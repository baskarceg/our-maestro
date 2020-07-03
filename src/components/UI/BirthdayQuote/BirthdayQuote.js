import React from 'react';

import classes from './BirthdayQuote.module.css';

const birthdayQuote = (props) => {
    let data = props.content;
    let arraydata = data.split('<br>');
    let display = arraydata.map(dat=>{
        return <p>{dat}</p>;
    })
    return (    
            <div className="container">
                <blockquote className={classes.quotebox} style={{padding:"2%"}}>
                    <p className={classes.quotationmark}>
                        “
                    </p>
                    <p className={classes.quotetext}>
                                {display}
                    </p>
                </blockquote>
            </div>
    );
}

export default birthdayQuote;
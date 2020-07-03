import React from 'react';

import classes from './BirthdayQuote.module.css';

const birthdayQuote = (props) => {
    let data = " Hey Weasley <br> We managed to grow separately than growing apart. We may live faraway in different countries, even different Continent in near future, but always you have a special place in my heart. I am very happy to see the strong willed women you have become.\nOn this birthday, I wish you to always be the cheerful and jolly good person you have been. May you cherish with all goodness. Hope you find your better half soon, so we can start double date/ vacay.. ";
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
import React from 'react';

import classes from './BirthdayQuote.module.css';

const birthdayQuote = (props) => {
    return (
            <div className="container">
                <blockquote className={classes.quotebox} style={{padding:"2%"}}>
                    <p className={classes.quotationmark}>
                        “
                    </p>
                    <p className={classes.quotetext}>
                    😀😃😄😁😆😅😂🤣☺️😊😇🙂🙃😉😌😍🥰😘😗😙😚😋
                    </p>
                </blockquote>
            </div>
    );
}

export default birthdayQuote;
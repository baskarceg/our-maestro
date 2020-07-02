import React from 'react';

import classes from './NotepaperQuote.module.css'; 

const notepaperQuote = (props) => {
    return (
        <div className={classes.notepaper}>
            <figure className={classes.quote}>
                <blockquote className={classes.curlyquotes} >
                {props.content}
                </blockquote>
                <figcaption className={classes.quoteby}>— {props.by}</figcaption>
            </figure>
        </div>
    );
}

export default notepaperQuote;
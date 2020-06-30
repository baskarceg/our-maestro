import React from 'react';

import classes from './QuoteCard.module.css';

const quoteCard = (props) => {
    return (
        <div className={classes.QuoteCard}>
            <blockquote className="blockquote text-center">
                <p className="mb-0">
                    {props.content}
                </p>
                <footer className="blockquote-footer">
                    {props.by}
                    <cite title="Source Title">
                        , {props.group}
                    </cite>
                </footer>
            </blockquote>
        </div>
    );
}

export default quoteCard;
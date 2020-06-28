import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import classes from './InstagramCard.module.css';

const instagramCard = (props) => {
    return (
        <div key={props.key} className={classes.InstagramCard}>
            <InstagramEmbed
                url={props.link}
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        </div>

    );
}

export default instagramCard;
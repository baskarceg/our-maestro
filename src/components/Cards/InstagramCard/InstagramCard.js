import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const instagramCard = (props) => {
    return (
        <div>
            <InstagramEmbed
                url='https://www.instagram.com/tv/CB0s6PMpWR7/?igshid=tgattp75r9fl'
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
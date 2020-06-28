import React from 'react';

import InstagramCard from '../../Cards/InstagramCard/InstagramCard';
import classes from './VideoCollection.module.css';

const videoCollection = ( props ) => {

    let instaVideos = null;
    if(props.videos !== null){
        instaVideos = props.videos.map((video,id)=>{
            console.log(video);
            console.log(id);
            return <InstagramCard link={video.link} />;
        }) 
    }

    return (
        <div className={classes.VideoCollection}>
            {instaVideos}
        </div>
    );
}

export default videoCollection;
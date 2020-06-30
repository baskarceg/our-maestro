import React from 'react';

import InstagramCard from '../../Cards/InstagramCard/InstagramCard';
import classes from './VideoCollection.module.css';

const videoCollection = ( props ) => {

    let instaVideos = null;
    let videosPerPage = 3;
    console.log("Page"+ props.currentPage);
    let startIndex = (props.currentPage -1 ) * videosPerPage;
    let endIndex = ( props.currentPage ) * videosPerPage;
    if(props.videos !== null){
        instaVideos = props.videos.map((video,id)=> {
            if( id >= startIndex && id < endIndex){
                return <InstagramCard key={id} link={video.link} />;
            }     
            return null;
        }) 
    }

    return (
        <div className={classes.VideoCollection}>
            {instaVideos}
        </div>
    );
}

export default videoCollection;
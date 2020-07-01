import React, { Component } from 'react';

import InstagramCard from '../../Cards/InstagramCard/InstagramCard';
import classes from './VideoCollection.module.css';

class VideoCollection extends Component {

    state={
        videosLoaded : 0
    }

    getSuccess = () => {
        let increaseCount = this.state.videosLoaded + 1;
        this.setState({videosLoaded:increaseCount});
        console.log(this.state.videosLoaded);
    }

    render(){
    let instaVideos = null;
    let videosPerPage = this.props.videosPerPage;
    console.log("Page"+ this.props.currentPage);
    let startIndex = (this.props.currentPage -1 ) * videosPerPage;
    let endIndex = ( this.props.currentPage ) * videosPerPage;
    if(this.props.videos !== null){
        instaVideos = this.props.videos.map((video,id)=> {
            if( id >= startIndex && id < endIndex){
                return <InstagramCard key={id} link={video.link} getSuccess={this.props.checkLoad}/>;
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
}

export default VideoCollection;
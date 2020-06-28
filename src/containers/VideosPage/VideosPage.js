import React, { Component } from 'react';

import VideoCollection from '../../components/Collection/VideoCollection/VideoCollection';
import axios from '../../axios_orders';

class VideosPage extends Component {
    state={
        videos : null,
        page : 1,
        numOfVideos : 0
    }

    componentDidMount(){
        console.log("Videospage Mounted");
        axios.get('videos.json')
            .then(response => {
                this.setState({ videos : response.data });
                let size = 0;
                this.state.videos.map((id, i) => {
                    size = size + 1;
                    return null;
                })
                this.setState({ numOfVideos: size });
                console.log(this.state);
            })
            .catch(error => {
                console.log("Will it come here");
            });
    }

    render(){
        return(
            <div>
                <p>This is videos Page</p>
                <VideoCollection videos={this.state.videos}/>
            </div>  
        );
    }
}

export default VideosPage;
import React, { Component } from 'react';

import VideoCollection from '../../components/Collection/VideoCollection/VideoCollection';
import axios from '../../axios_orders';
import Pagination from '../../components/UI/Pagination/Pagination';
import classes from './VideosPage.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class VideosPage extends Component {
    state = {
        videos: null,
        page: 1,
        numOfVideos: null
    }

    componentDidMount() {
        console.log("Videospage Mounted");
        console.log(this.props);
        this.setState({
            page : +this.props.match.params.id
        });
        axios.get('videos.json')
            .then(response => {
                this.setState({ videos: response.data });
                let size = 0;
                this.state.videos.map((id, i) => {
                    size = size + 1;
                    return null;
                })
                this.setState({ numOfVideos: size });
                console.log("Here");
                console.log(this.state.numOfVideos);
            })
            .catch(error => {
                console.log("Will it come here");
            });
    }

    render() {

        let videos = <Spinner />;
        console.log("Outside" + this.state.numOfVideos);
        if (this.state.videos && this.state.numOfVideos) {
            console.log("Inside" + this.state.numOfVideos)
            videos = (
                <div>
                    <VideoCollection
                        videos={this.state.videos}
                        numOfVideos={this.state.numOfVideos}
                        currentPage={this.state.page} />
                    <Pagination size={this.state.numOfVideos} currentPage={this.state.page} />
                </div>
            );
        }

        return (
            <div className={classes.VideosPage}>
                {videos}
            </div>
        );
    }
}

export default VideosPage;
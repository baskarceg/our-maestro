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
        numOfVideos: null,
        videosPerPage: 3,
        videosLoaded: 0,
        totalPages:null
    }

    componentDidMount() {

        console.log("Videospage Mounted");
        this.setState({
            page: +this.props.match.params.id
        });
        axios.get('videos.json')
            .then(response => {
                this.setState({ videos: response.data });
                let size = 0;
                this.state.videos.map((id, i) => {
                    size = size + 1;
                    return null;
                })
                let totalPages=size/this.state.videosPerPage;
                this.setState({ numOfVideos: size , totalPages: Math.ceil(totalPages) });
            })
            .catch(error => {
                console.log("Will it come here");
            });
    }

    checkLoad = () => {
        let newCount = this.state.videosLoaded + 1;
        this.setState({ videosLoaded: newCount });
        console.log("videos Loaded:" + this.state.videosLoaded);
    }

    render() {

        console.log(this.state);

        let videos = <Spinner />;
        let pagination = null;
        if (this.state.videosLoaded === this.state.videosPerPage && this.state.page !== this.state.totalPages) {
            pagination = <Pagination size={this.state.numOfVideos} currentPage={this.state.page} />;
        }
        if( this.state.videosLoaded !== this.state.videosPerPage && this.state.page===this.state.totalPages ){
            pagination = <Pagination size={this.state.numOfVideos} currentPage={this.state.page} />;
        }
        if (this.state.videos && this.state.numOfVideos) {
            videos = (
                <div>

                    <VideoCollection
                        videos={this.state.videos}
                        numOfVideos={this.state.numOfVideos}
                        currentPage={this.state.page}
                        videosPerPage={this.state.videosPerPage}
                        checkLoad={this.checkLoad} />

                </div>
            );
        }

        return (
            <div className={classes.VideosPage}>
                <div className="d-flex justify-content-between" style={{paddingTop:"0.5%"}}>
                    <h3> Videos by Our Maestro</h3>
                    <div className={classes.Horizondal}>
                        {pagination}
                    </div>    
                </div>

                <hr></hr>
                {videos}
                <div className={classes.Vertical}>
                    {pagination}
                </div>
            </div>
        );
    }
}

export default VideosPage;
import React, { Component } from 'react';

import axios from '../../axios_orders';
import GroupCard from '../../components/Cards/GroupCard/GroupCard';
import classes from './Friends.module.css';
import FamilyCard from '../../components/Cards/FamilyCard/FamilyCard';
import DetailsPage from '../../components/UI/DetailsPage/DetailsPage';
import Spinner from '../../components/UI/Spinner/Spinner';
import Image from '../../components/UI/Image/Image';

class Friends extends Component {

    state = {
        groups: null,
        displayGroup: true,
        currentGroup: null,
        displayFriends: false,
        friends: null,
        displayFriendDetails: false,
        currentFriend: null,
        testimonials: null,
        currentFriendTestimonial: null,
        currentFriendData: null
    }

    componentDidMount() {
        axios.get('groups.json')
            .then(response => {
                console.log(response);
                this.setState({ groups: response.data });
            })
            .catch(error => {
                console.log("Group fetch failed");
            });

        axios.get('friends.json')
            .then(response => {
                console.log(response);
                this.setState({ friends: response.data })
            })
            .catch(error => {
                console.log("Friends fetch failed");
            });

        axios.get('testimonials.json')
            .then(response => {
                this.setState({ testimonials: response.data });
            })
            .catch(error => {
                console.log("Testimonials fetch failed");
            });
    }

    groupClickedHandler = (groupName) => {
        window.scrollTo(0, 0);
        this.setState({ currentGroup: groupName });
        this.setState({
            displayGroup: false,
            displayFriends: true
        })
    }

    returnHandler = () => {
        window.scrollTo(0, 0);
        this.setState({
            displayFriends: false,
            displayGroup: true,
            currentGroup: null,
            currentFriendTestimonial: null
        })
    }

    goBackFriendsHandler = () => {
        window.scrollTo(0, 0);
        this.setState({
            displayFriends: true,
            displayFriendDetails: false,
            currentFriend: null,
            currentFriendData: null,
            currentFriendTestimonial: null
        })
    }

    handleFriendClicked = (friendName) => {
        window.scrollTo(0, 0);
        console.log(friendName);
        this.state.testimonials.map((testimonial, index) => {
            console.log(testimonial.name);
            if (testimonial.name === friendName) {
                console.log(testimonial);
                this.setState({
                    currentFriendTestimonial: testimonial,
                    currentFriend: friendName,
                })
            }
            return null;
        })
        this.state.friends.map((friend, index) => {
            console.log(friend.name);
            if (friend.name === friendName) {
                console.log(friend.name);
                this.setState({
                    currentFriendData: friend,
                    displayFriends: false,
                    displayFriendDetails: true
                });
                window.scrollTo(0, 0);
            }
            return null;
        })
    }
    render() {
        let groups = <Spinner />;

        if (this.state.groups) {
            groups = this.state.groups.map((group, index) => {
                return <GroupCard
                    key={index}
                    groupName={group.name}
                    groupPhotoSrc={group.imageUrl}
                    groupPhotoShortSrc={group.verticalImageUrl}
                    groupClicked={this.groupClickedHandler}
                />
            })
        }

        let friends = null;
        let groupImages = null;

        if (this.state.currentGroup && this.state.friends) {
            let groupPics = null;
            this.state.groups.map(group => {
                if (group.name === this.state.currentGroup) {
                    console.log(group.name+this.state.currentGroup);
                    console.log("link:"+group.pics);
                    groupPics = group.pics;
                }
                return null;
            })
            console.log("Here"+groupPics)
            if (groupPics) {
                let groupPicsArray = groupPics.split(',');
                groupImages = groupPicsArray.map(image => {
                    return <Image photoSrc={image} />
                })
            }


            friends = this.state.friends.map((friend, index) => {
                if (friend.group.includes(this.state.currentGroup)) {
                    return <FamilyCard
                        key={index}
                        name={friend.name}
                        groupPhotoSrc={friend.image}
                        photoClicked={this.handleFriendClicked} />
                }
                else {
                    return null;
                }
            })
        }

        let friendDetails = null;

        if (this.state.currentFriendData) {
            friendDetails = <DetailsPage
                type="friends"
                friend={this.state.currentFriendData}
                testimonial={this.state.currentFriendTestimonial}
                goBack={this.goBackFriendsHandler} />
        }

        console.log(groupImages);

        return (
            <div >
                <div className={classes.Groups} hidden={!this.state.displayGroup}>
                    {groups}
                </div>
                <div hidden={!this.state.displayFriends}
                    style={{ paddingLeft: "3%", paddingRight: "3%", marginBottom: "20px" }}>
                    <div className="d-flex justify-content-between" >
                        <h3 style={{ fontFamily: "Finger Paint", fontSize: "1.5rem" }}> {this.state.currentGroup}</h3>
                        <div className={classes.WebButton}>
                            <button
                                type="button"
                                onClick={this.returnHandler}
                                className="btn btn-outline-dark">
                                Back
                            </button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={classes.FriendsContent}>
                        {friends}
                    </div>
                    <div style={{ marginTop: "50px", marginBottom: "50px" }} hidden={!groupImages}>
                        <h3
                            style={{ fontFamily: "Finger Paint", fontSize: "1.5rem" }}>
                            Photos
                        </h3>
                        <hr></hr>
                        <div className={classes.Pics}>
                            {groupImages}
                        </div>
                    </div>



                </div>
                <div className={classes.Details} hidden={!this.state.displayFriendDetails}>
                    {friendDetails}
                </div>
            </div>
        );
    }
}

export default Friends;
import React, { Component } from 'react';

import axios from '../../axios_orders';
import GroupCard from '../../components/Cards/GroupCard/GroupCard';
import classes from './Friends.module.css';
import FamilyCard from '../../components/Cards/FamilyCard/FamilyCard';

class Friends extends Component {

    state = {
        groups: null,
        displayGroup: true,
        currentGroup: null,
        displayFriends: false,
        friends: null
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
    }

    groupClickedHandler = (groupId) => {
        let groupName = null;
        console.log(groupId);
        this.state.groups.map(group => {
            if (group.identifier === groupId) {
                groupName = group.name;
            }
            return null;
        })
        console.log(groupName);
        this.setState({ currentGroup: groupName });
        this.setState({
            displayGroup: false,
            displayFriends: true
        })
    }

    returnHandler = () =>{
        this.setState({
            displayFriends:false,
            displayGroup:true,
            currentGroup:null
        })
    }
    render() {
        let groups = null;

        if (this.state.groups) {
            groups = this.state.groups.map((group, index) => {
                return <GroupCard
                    key={index}
                    groupName={group.name}
                    groupPhotoSrc={group.imageUrl}
                    groupPhotoShortSrc={group.verticalImageUrl}
                    groupIdentifier={group.identifier}
                    groupClicked={this.groupClickedHandler}
                />
            })
        }

        let friends = null;

        if (this.state.currentGroup) {
            friends = this.state.friends.map((friend, index) => {
                if (friend.group.includes(this.state.currentGroup)) {
                    return <FamilyCard
                        key={index}
                        name={friend.name}
                        groupPhotoSrc={friend.image} />
                }
                else {
                    return null;
                }
            })
        }

        return (
            <div >
                <div className={classes.Groups} hidden={!this.state.displayGroup}>
                    {groups}
                </div>
                <div hidden={!this.state.displayFriends} style={{ paddingLeft: "3%", paddingRight: "3%" }}>
                    <div className="d-flex justify-content-between" >
                        <h3 style={{ fontFamily: "Finger Paint" }}> {this.state.currentGroup}</h3>
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
                    <div className={classes.MobileButton} >
                        <button
                            type="button"
                            onClick={this.returnHandler}
                            className="btn btn-outline-dark">
                            Back
                    </button>
                    </div>
                </div>
            </div>


        );
    }
}

export default Friends;
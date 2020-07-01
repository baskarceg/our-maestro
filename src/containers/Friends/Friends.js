import React, { Component } from 'react';

import axios from '../../axios_orders';
import GroupCard from '../../components/Cards/GroupCard/GroupCard';
import classes from './Friends.module.css';

class Friends extends Component {

    state = {
        groups: null,
        displayGroup: true,
        currentGroup: null,
        displayFriends: false
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

        return (
            <div >
                <div className={classes.Friends} hidden={!this.state.displayGroup}>
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
                    <div className={classes.Testimonial}>
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
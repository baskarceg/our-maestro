import React, { Component } from 'react';

import GroupCard from '../../components/Cards/GroupCard/GroupCard';
import classes from './Friends.module.css';

class Friends extends Component {

    groupClicked = (param) => {
        console.log("GroupClicked:" + param);
    }
    render() {
        return <div className={classes.Friends}> <GroupCard groupClicked={this.groupClicked}/> <GroupCard /> <GroupCard /></div>;
    }
}

export default Friends;
import React, { Component } from 'react';

import classes from './Family.module.css';
import FamilyCard from '../../components/Cards/FamilyCard/FamilyCard';

class Family extends Component {
    render() {
        return (
            <div className={classes.Family}>
                <FamilyCard name="Amma" groupPhotoSrc="https://i.ibb.co/xmjqr0C/amma.jpg"/>
                <FamilyCard name="Appa" groupPhotoSrc="https://i.ibb.co/88X0k46/appa.jpg"/>
                <FamilyCard name="Anna" groupPhotoSrc="https://i.ibb.co/RBY25t4/anna.jpg"/>
                <FamilyCard name="Mathini" groupPhotoSrc="https://i.ibb.co/d2gtH4z/mathini.jpg"/>
            </div>
        );
    }
}

export default Family;
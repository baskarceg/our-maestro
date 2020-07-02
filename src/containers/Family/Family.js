import React, { Component } from 'react';

import classes from './Family.module.css';
import FamilyCard from '../../components/Cards/FamilyCard/FamilyCard';
import axios from '../../axios_orders';

class Family extends Component {
    state = {
        familyMembers : null
    }

    componentDidMount() {
        axios.get('family.json')
            .then(response => {
                console.log(response);
                this.setState({ familyMembers : response.data });
            })
            .catch(error => {
                console.log("Family members fetch failed");
            });
    }
    render() {

        let familyMembers = null;

        if(this.state.familyMembers){
            familyMembers = this.state.familyMembers.map((member,index)=>{
                return <FamilyCard 
                key={index}
                name={member.name} 
                groupPhotoSrc={member.image} />;
            })
        }
        return (
            <div className={classes.Family}>
                {familyMembers}
            </div>
        );
    }
}

export default Family;
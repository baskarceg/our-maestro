import React, { Component } from 'react';

import classes from './Family.module.css';
import FamilyCard from '../../components/Cards/FamilyCard/FamilyCard';
import axios from '../../axios_orders';
import DetailsPage from '../../components/UI/DetailsPage/DetailsPage';

class Family extends Component {
    state = {
        familyMembers: null,
        displayFamily: true,
        displayMember: false,
        currentMember: null,
        currentMemberData: null
    }

    componentDidMount() {
        axios.get('family.json')
            .then(response => {
                console.log(response);
                this.setState({ familyMembers: response.data });
            })
            .catch(error => {
                console.log("Family members fetch failed");
            });
    }

    photoClickedHandler = (memberName) => {
        console.log(memberName);
        this.state.familyMembers.map((member, index) => {
            console.log(member.name);
            if (member.name === memberName) {
                console.log(member.name);
                console.log(member);
                this.setState({
                    currentMember:member.name,
                    currentMemberData: member,
                    displayFamily: false,
                    displayMember: true
                });
                window.scrollTo(0, 0);
            }
            return null;
        })
    }

    goBackFamilyHandler = () => {
        window.scrollTo(0,0);
        this.setState({
            displayFamily:true,
            displayMember:false,
            currentMember:null,
            currentMemberData:null
        })
    }
    render() {

        let familyMembers = null;

        if (this.state.familyMembers) {
            familyMembers = this.state.familyMembers.map((member, index) => {
                return <FamilyCard
                    key={index}
                    name={member.name}
                    groupPhotoSrc={member.image}
                    photoClicked={this.photoClickedHandler} />;
            })
        }

        let memberDetails = null;

        if ( this.state.currentMemberData) {
            memberDetails = <DetailsPage
                type="friends"
                friend={this.state.currentMemberData}
                //testimonial={this.state.currentFriendTestimonial} 
                goBack={this.goBackFamilyHandler}/>
        }
        console.log(memberDetails);

        return (
            <div >
                <div hidden={!this.state.displayFamily}>
                    <div className={classes.Heading} >
                        <h4 >Meastro's Sweet Little Kingdom</h4>
                        <hr />
                    </div>
                    <div className={classes.Family}>
                        {familyMembers}
                    </div>
                </div>
                <div hidden={!this.state.displayMember}>
                    {memberDetails}
                </div>
            </div>
        );
    }
}

export default Family;
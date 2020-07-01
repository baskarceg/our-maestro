import React, { Component } from 'react';

import classes from './About.module.css';
import axios from '../../axios_orders';
import QuoteCard from '../../components/Cards/QuoteCard/QuoteCard';
import GroupCard from '../../components/Cards/GroupCard/GroupCard';

class About extends Component {

    state = {
        testimonials: null,
        showTestimonials: true,
        groups: null,
        displayTitle: true,
        displayGroup: false,
        displayTestimonial: false,
        currentGroup: null
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

        axios.get('testimonials.json')
            .then(response => {
                console.log(response);
                this.setState({ testimonials: response.data });
            })
            .catch(error => {
                console.log("Testimonials fetch failed");
            });
    }

    showGroupsHandler = () => {
        this.setState({
            displayTitle: false,
            displayGroup: true
        })
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
            displayTestimonial: true
        })
    }

    returnHandler = () => {
        this.setState({
            displayTestimonial:false,
            displayGroup:true,
            currentGroup:null
        })
    }

    render() {
        let testimonials = null;

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

        console.log(this.state.testimonials);

        if (this.state.testimonials && this.state.currentGroup) {
            testimonials = this.state.testimonials.map((testimonial, index) => {
                console.log(index);
                if (testimonial) {
                    console.log(typeof testimonial.groupName);
                    console.log(typeof this.state.currentGroup);
                    if (testimonial.groupName.includes(this.state.currentGroup)) {
                        console.log(testimonial);
                        return <QuoteCard
                            key={index}
                            by={testimonial.name}
                            group={this.state.currentGroup}
                            content={testimonial.modContent}
                        />
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            })
        }

        return (
            <div className={classes.About} >
                <div className={classes.Intro} style={{ fontFamily: "Finger Paint" }} hidden={!this.state.displayTitle}>
                    <h2> Oh!! Are you curious  ?</h2>
                    <button type="button" className="btn btn-lg btn-outline-info" style={{ marginTop: "4%" }} onClick={this.showGroupsHandler}> Check it out</button>
                </div>
                <div className={classes.Group} hidden={!this.state.displayGroup}>
                    {groups}
                </div>
                <div hidden={!this.state.displayTestimonial} style={{ paddingLeft: "3%", paddingRight: "3%" }}>
                    <div className="d-flex justify-content-between" >
                        <h3 style={{ fontFamily: "Finger Paint" }}> {this.state.currentGroup}</h3>
                        <button
                            type="button"
                            onClick={this.returnHandler}
                            className="btn btn-outline-dark">
                            Back
                            </button>
                    </div>
                    <hr></hr>
                    <div className={classes.Testimonial} hidden={!this.state.displayTestimonial}>
                        {testimonials}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
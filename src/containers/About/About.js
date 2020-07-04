import React, { Component } from 'react';

import classes from './About.module.css';
import axios from '../../axios_orders';
import GroupCard from '../../components/Cards/GroupCard/GroupCard';
import NotepaperQuote from '../../components/UI/NotepaperQuote/NotepaperQuote';

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
                this.setState({ groups: response.data });
            })
            .catch(error => {
                console.log("Group fetch failed");
            });

        axios.get('testimonials.json')
            .then(response => {
                this.setState({ testimonials: response.data });
            })
            .catch(error => {
                console.log("Testimonials fetch failed");
            });
    }

    showGroupsHandler = () => {
        window.scrollTo(0,0);
        this.setState({
            displayTitle: false,
            displayGroup: true
        })
    }

    groupClickedHandler = (groupName) => {
        window.scrollTo(0,0);
        console.log(groupName);
        this.setState({ currentGroup: groupName });
        this.setState({
            displayGroup: false,
            displayTestimonial: true
        })
    }

    returnHandler = () => {
        window.scrollTo(0,0);
        this.setState({
            displayTestimonial: false,
            displayGroup: true,
            currentGroup: null
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
                    groupClicked={this.groupClickedHandler}
                />
            })
        }

        if (this.state.testimonials && this.state.currentGroup) {
            testimonials = this.state.testimonials.map((testimonial, index) => {
                if (testimonial) {
                    if (testimonial.groupName.includes(this.state.currentGroup)) {
                        return <NotepaperQuote
                            key={index}
                            by={testimonial.name}
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
                <div className={classes.Intro}
                    style={{ fontFamily: "Finger Paint" }}
                    hidden={!this.state.displayTitle}>
                    <h2> Oh!! Are you curious  ?</h2>
                    <button type="button" 
                    className="btn btn-lg btn-outline-info" 
                    style={{ marginTop: "4%" }} 
                    onClick={this.showGroupsHandler}> Check it out</button>
                </div>
                <div className={classes.Group} hidden={!this.state.displayGroup}>
                    {groups}
                </div>
                <div 
                hidden={!this.state.displayTestimonial} 
                style={{ paddingLeft: "3%", paddingRight: "3%",marginBottom:"30px" }}>
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
                    <div className={classes.Testimonial} hidden={!this.state.displayTestimonial}>
                        {testimonials}
                    </div>
                    {/* <div className={classes.MobileButton} >
                        <button
                            type="button"
                            onClick={this.returnHandler}
                            className="btn btn-outline-dark">
                            Back
                            </button>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default About;
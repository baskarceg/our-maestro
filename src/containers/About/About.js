import React, { Component } from 'react';

import classes from './About.module.css';
import axios from '../../axios_orders';
import QuoteCard from '../../components/Cards/QuoteCard/QuoteCard';

class About extends Component {

    state = {
        testimonials: null,
        showTestimonials: true
    }

    componentDidMount() {
        axios.get('testimonials.json')
            .then(response => {
                console.log(response);
                this.setState({ testimonials: response.data });
            })
            .catch(error => {
                console.log("Testimonials fetch failed");
            });
    }

    render() {
        let testimonials = null;

        if (this.state.testimonials && this.state.showTestimonials) {
            testimonials = this.state.testimonials.map((testimonial, index) => {
                return <QuoteCard
                    key={index}
                    by={testimonial.by}
                    group={testimonial.group}
                    content={testimonial.content}
                />

            })
        }

        return (
            <div className={classes.About} hidden={!this.state.showTestimonials}>
                {testimonials}
            </div>
        );
    }
}

export default About;
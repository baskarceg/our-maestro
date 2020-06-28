import React, { Component } from 'react';

import classes from './Homepage.module.css';
import InstagramCard from '../../components/Cards/InstagramCard/InstagramCard'
import DescriptiveCard from '../../components/Cards/DescriptiveCard/DescriptiveCard';
import axios from '../../axios_orders';


class Homepage extends Component {
    state = {
        cards: null,
        index: 0,
        size: 0,
        endofIndex: false,
        startofIndex: true
    }

    componentDidMount() {
        console.log("Homepage Mounted");
        axios.get('cards.json')
            .then(response => {
                this.setState({ cards: response.data });
                let size = 0;
                this.state.cards.map((id, i) => {
                    size = size + 1;
                    return null;
                })
                this.setState({ size: size });
            })
            .catch(error => {
                console.log("Will it come here");
            });
    }

    incrementIndex = () => {
        this.setState({ startofIndex: false });
        let i = this.state.index + 1;
        this.setState({ index: i });
        if (this.state.size <= i + 1) {
            this.setState({ endofIndex: true });
        }
    }

    decrementIndex = () => {
        this.setState({ endofIndex: false });
        let i = this.state.index - 1;
        this.setState({ index: i });
        if (i <= 0) {
            this.setState({ startofIndex: true });
        }
    }

    render() {

        console.log("render");
        console.log(this.state.size);

        let something = this.state.cards ?
            <DescriptiveCard
                name={this.state.cards[this.state.index].name}
                data={this.state.cards[this.state.index].data}
                imageUrl={this.state.cards[this.state.index].imageUrl} />
            : null;

        return (
            <div>
                <div className={classes.Homepage}>
                    <div style={{ paddingTop: "200px", paddingLeft: "50px" }}>
                        <button className="btn btn-secondary" style={{ height: "20%" }} onClick={this.decrementIndex} disabled={this.state.startofIndex}>Prev</button>
                    </div>
                    {something}
                    <div style={{ paddingTop: "200px", paddingRight: "50px" }}>
                        <button className="btn btn-secondary" style={{ height: "20%" }} onClick={this.incrementIndex} disabled={this.state.endofIndex}>Next</button>
                    </div>
                </div>
                <InstagramCard />
            </div>
        );
    }
}

export default Homepage;
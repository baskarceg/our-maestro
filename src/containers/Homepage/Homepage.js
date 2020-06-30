import React, { Component } from 'react';

import classes from './Homepage.module.css';
import DescriptiveCard from '../../components/Cards/DescriptiveCard/DescriptiveCard';
import axios from '../../axios_orders';
import CustomButton from '../../components/UI/Button/CustomButton';
import MinimalCard from '../../components/Cards/MinimalCard/MinimalCard';


class Homepage extends Component {
    state = {
        cards: null,
        index: 0,
        size: 0,
        endofIndex: false,
        startofIndex: true,
        showCards: true
    }

    componentDidMount() {
        console.log("Homepage Mounted");
        axios.get('cards.json')
            .then(response => {
                console.log(response);
                this.setState({ cards: response.data });
                let size = 0;
                this.state.cards.map((id, i) => {
                    size = size + 1;
                    return null;
                })
                this.setState({ size: size });
            })
            .catch(error => {
                console.log("Cards Fetch failed");
            });
    }

    navigate = (direction) => {
        console.log(direction);
        if (direction === "next") {
            this.setState({ startofIndex: false });
            let i = this.state.index + 1;
            this.setState({ index: i });
            if (this.state.size <= i + 1) {
                this.setState({ endofIndex: true });
            }
        }
        else if (direction === "prev") {
            this.setState({ endofIndex: false });
            let i = this.state.index - 1;
            this.setState({ index: i });
            if (i <= 0) {
                this.setState({ startofIndex: true });
            }
        }
    }


    render() {

        let something = null;

        if (this.state.cards && this.state.showCards) {
            something = (
                    <DescriptiveCard
                        name={this.state.cards[this.state.index].name}
                        data={this.state.cards[this.state.index].data}
                        imageUrl={this.state.cards[this.state.index].url} />
            );
        }

        let minimal = null;

        if (this.state.cards && this.state.showCards) {
            minimal = this.state.cards.map((card, index) => {
                return <MinimalCard key={index}
                    title={card.name}
                    link={card.url}
                    content={card.data} />
            })
        }

        return (
            <div>
                <div className={classes.Homepage} >
                    <div className={classes.Horizondal} hidden={!this.state.showCards}>
                        <div className={classes.CustomButtonCSS}>
                            <CustomButton buttonType="Previous" disabled={this.state.startofIndex} navigate={this.navigate} />
                        </div>
                        {something}
                        <div className={classes.CustomButtonCSS}>
                            <CustomButton buttonType="Next" disabled={this.state.endofIndex} navigate={this.navigate} />
                        </div>
                    </div>
                    <div className={classes.Vertical} hidden={!this.state.showCards}>
                        {minimal}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
import React, { Component } from 'react';

import classes from './Homepage.module.css';
import axios from '../../axios_orders';
import MinimalCard from '../../components/Cards/MinimalCard/MinimalCard';
import HoverCard from '../../components/Cards/HoverCard/HoverCard';
import Spinner from '../../components/UI/Spinner/Spinner';


class Homepage extends Component {
    state = {
        cards: null,
        index: 0,
        size: 0,
        endofIndex: false,
        startofIndex: true,
        showCards: false,
        showIntro: true,
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

    showCardsHandler = () => {
        this.setState({
            showCards: true,
            showIntro: false
        })
    }


    render() {

        // let something = null;

        // if (this.state.cards && this.state.showCards) {
        //     console.log(this.state.cards[this.state.index].data);
        //     something = (
        //         <DescriptiveCard
        //             name={this.state.cards[this.state.index].name}
        //             data={this.state.cards[this.state.index].data}
        //             imageUrl={this.state.cards[this.state.index].bigUrl} />
        //     );
        // }

        let whatHorizontal = null;
        let whoHorizontal = null;
        let whatVertical = null;
        let whoVertical = null;

        if (this.state.cards) {
            whatHorizontal = <HoverCard
                cards={this.state.cards}
                type="what" />;

            whoHorizontal = <HoverCard
                cards={this.state.cards}
                type="who" />;
        }


        if (this.state.cards && this.state.showCards) {
            whoVertical = this.state.cards.map((card, index) => {
                if (card && card.type === "who") {
                    return <MinimalCard key={index}
                        title={card.name}
                        link={card.url}
                        content={card.shortData} />;
                }
                return null;
            })

            whatVertical = this.state.cards.map((card, index) => {
                if (card && card.type === "what") {
                    return <MinimalCard key={index}
                        title={card.name}
                        link={card.url}
                        content={card.shortData} />;
                }
                return null;
            })
        }

        let horizondal = (
            <div style={{ marginTop: "200px" }}>
                <Spinner /> ;
            </div>
        )
        let vertical = null;

        if (whatHorizontal && whatHorizontal) {
            horizondal = (
                <div className={classes.Horizondal} >
                    <div style={{ display: "flex", flexFlow: "column", width: "100%" }}>
                        <div >
                            <div className={classes.Heading}>
                                <h4 >Who can't she be?</h4>
                                <hr />
                            </div>

                            {whoHorizontal}
                        </div>
                        <div >
                            <div className={classes.Heading}>
                                <h4 >What can't she do?</h4>
                                <hr />
                            </div>

                            {whatHorizontal}
                        </div>
                    </div>
                </div>
            );
        }

        if (whatVertical && whoVertical && whatHorizontal && whatHorizontal) {
            vertical = (
                <div className={classes.Vertical} >
                    <div >
                        <div className={classes.Heading}>
                            <h4 >Who can't she be?</h4>
                            <hr />
                        </div>
                        {whoVertical}
                    </div>
                    <div >
                        <div className={classes.Heading}>
                            <h4 >What can't she do?</h4>
                            <hr />
                        </div>
                        {whatVertical}
                    </div>

                </div>
            );
        }


        return (
            <div>
                <div >
                    <div className={classes.Intro} style={{ fontFamily: "Finger Paint" }} hidden={!this.state.showIntro}>
                        <h2>Who is this
                         <img src="https://i.ibb.co/T86FM5z/48cdae97-eaa4-45a0-a90a-867fe5c8077d-200x200.png" className="d-inline-block align-top" alt="Maestro" loading="lazy" />
                        ? Do you want to find out?</h2>
                        <button type="button" className="btn btn-lg btn-outline-info" style={{ marginTop: "4%" }} onClick={this.showCardsHandler}> Let's Find out</button>
                    </div>
                </div>
                <div hidden={!this.state.showCards}>
                    {horizondal}
                </div>

                <div hidden={!this.state.showCards}>
                    {vertical}
                </div>


            </div>

        );
    }
}

export default Homepage;
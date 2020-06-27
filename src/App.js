/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import DescriptiveCard from './components/Cards/DescriptiveCard/DescriptiveCard';
import classes from './App.module.css';
import axios from './axios_orders';

class App extends Component {
  state = {
    cards: [{
      name: "Something",
      imageUrl: "https://i.ibb.co/qyhcrNH/DSC04139.jpg"
    },
    {
      name: "Nothing",
      imageUrl: "https://i.ibb.co/qyhcrNH/DSC04139.jpg"
    }],
    index: 0,
    size: 0,
    endofIndex: false,
    startofIndex : true
  }

  constructor() {
    super();
    let size = 0;
    this.state.cards.map((id, i) => {
      console.log(i);
      size = size + 1;
      return null;
    })
    console.log("size end" + size);
    this.state.size = size;
    console.log("size" + this.state.size);
  }

  componentDidMount() {
    console.log("Burger Builder Mounted");
    console.log(this.props);
    axios.get('ingredients.json')
        .then(response => {
            console.log("Inside this shit");
            console.log(response);
            this.setState({ ingredients: response.data });
        })
        .catch(error => {
            console.log("Will it come here");
            this.setState({error:true});
        });
  }

  incrementIndex = () => {
    this.setState({startofIndex:false});
    let i = this.state.index + 1;
    this.setState({ index: i });
    if (this.state.size <= i + 1) {
      this.setState({ endofIndex: true });
    }
  }

  decrementIndex = () => {
    this.setState({endofIndex:false});
    let i = this.state.index - 1;
    this.setState({ index: i });
    if (i <= 0) {
      this.setState({ startofIndex: true });
    }
  }

  render() {

    console.log("render");
    console.log(this.state.size);

    let something = <DescriptiveCard name={this.state.cards[this.state.index].name} imageUrl={this.state.cards[this.state.index].imageUrl} />
    return (
      <div>
        <Navbar />
        <div className={classes.App}>
        <div style={{paddingTop:"200px", paddingLeft:"50px"}}>
          <button className="btn btn-secondary" style={{height:"20%"}} onClick={this.decrementIndex} disabled={this.state.startofIndex}>Prev</button>
          </div>
          {something}
          <div style={{paddingTop:"200px", paddingRight:"50px"}}>
          <button className="btn btn-secondary" style={{height:"20%"}} onClick={this.incrementIndex} disabled={this.state.endofIndex}>Next</button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

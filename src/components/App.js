import React, { Component } from 'react';
import './../App.css';

import PlantList from "./PlantList";

export default class App extends Component {
  state = {
    plant: "",
    isError: false,
    plants: [{
        name: "Cactus"
      }, {
        name: "Fern"
      }, {
        name: "Lemon Tree"
      }],
  }

  handleChange = (event) => {
    const { name, value } = event.target
    const names = this.state.plants.map(plant => plant.name)
    if (names.includes(value)){
      this.setState({
        isError: true,
      })
    } else {
      this.setState({
        [name]: value,
        isError: false,
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      plants: [...this.state.plants, {name: this.state.plant}],
      plant: "",
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Plants</h1>
        <PlantList plants={this.state.plants} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a plant"
            name="plant"
            value={this.state.plant}
            onChange={this.handleChange}
          />
          <input type="submit" value ="Add" />
          {this.state.isError 
            ? <p>There is already one, ya jerk!</p>
            : null}
        </form>
      </div>
    );
  }
}
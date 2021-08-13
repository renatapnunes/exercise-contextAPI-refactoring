import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      car: '',
      side: false,
    };

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: { ...this.state, [car]: side },
    });
  }

  render() {
    const { cars } = this.state;
    const contextValue = {
      cars,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <div>
          <Cars cars={ this.state.cars } moveCar={ this.moveCar } />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;

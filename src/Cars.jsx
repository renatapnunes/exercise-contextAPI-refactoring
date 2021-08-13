// src/Cars.jsx

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

class Cars extends Component {
  render() {
    const { cars: { red, blue, yellow }, moveCar } = this.props;
    return (
      <div>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <div>
                  <img
                    className={red ? 'car-right' : 'car-left'}
                    src={carRed}
                    alt="red car"
                  />
                  <button
                    onClick={() => moveCar('red', !red)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
                <div>
                  <img
                    className={blue ? 'car-right' : 'car-left'}
                    src={carBlue}
                    alt="blue car"
                  />
                  <button
                    onClick={() => moveCar('blue', !blue)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
                <div>
                  <img
                    className={yellow ? 'car-right' : 'car-left'}
                    src={carYellow}
                    alt="yellow car"
                  />
                  <button
                    onClick={() => moveCar('yellow', !yellow)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blue: PropTypes.bool.isRequired,
  red: PropTypes.bool.isRequired,
  yellow: PropTypes.bool.isRequired,
};

export default Cars;

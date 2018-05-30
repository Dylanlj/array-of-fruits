import React, { Component } from 'react';
import fig from './assets/images/fig.png';
import kiwi from './assets/images/kiwi.png';
import mint1 from './assets/images/mint1.png';
import mint2 from './assets/images/mint2.png';
import mushroom from './assets/images/mushroom.png';
import seed1 from './assets/images/seed1.png';
import seed2 from './assets/images/seed2.png';
import seed3 from './assets/images/seed3.png';
import seeds from './assets/images/seeds.png';



class FoodImages extends Component {
  render() {
    return (
      <div className="food-images">
        <img src={fig} alt='fig' className='fig'/>
        <img src={kiwi} alt='kiwi' className='kiwi'/>
        <img src={mint1} alt='mint1' className='mint1'/>
        <img src={mint2} alt='mint2' className='mint2'/>
        <img src={mushroom} alt='mushroom' className='mushroom'/>
        <img src={seed1} alt='seed1' className='seed1'/>
        <img src={seed2} alt='seed2' className='seed2'/>
        <img src={seed3} alt='seed3' className='seed3'/>
        <img src={seeds} alt='seeds' className='seeds'/>
      </div>
    );
  }
}

export default FoodImages;

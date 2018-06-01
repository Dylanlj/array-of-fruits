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
  constructor (props) {
    super(props)
    this.state = {
      originalCoordinates: {
        fig: {x: 0, y: 0},
        kiwi: {x: 0, y: 0},
        mint1: {x: 0, y: 0},
        mint2: {x: 0, y: 0},
        mushroom: {x: 0, y: 0},
        seed1: {x: 0, y: 0},
        seed2: {x: 0, y: 0},
        seed3: {x: 0, y: 0},
        seeds: {x: 0, y: 0}
      },
      adjustedCoordinates: {}
    }
  }

  componentDidMount () {
    //this is a terrible way to do this
    let doThis = () => {
      let allFoodCoordinates = {}

      for (let foodName in this.state.originalCoordinates) {
        let element = document.getElementsByClassName(foodName)
        allFoodCoordinates[foodName] = {x: element[0].offsetLeft, y:element[0].offsetTop }
        // console.log(element[0].offsetHeight)
        // this.setState({originalCoordinates})
      }
      this.setState({originalCoordinates: allFoodCoordinates})
          console.log(this.state)
    }
    setTimeout(doThis, 100)


  }

  render() {
    // console.log(this.props.state)
    let foodPosition = {
      position: 'absolute',
      top: `${this.props.mousePosition.y}px`,
      left: `${this.props.mousePosition.x}px`

    }
      // for (let foodName in this.state.originalCoordinates) {
      //   let element = document.getElementsByClassName(foodName)
      //   console.log(foodName)
      //   console.log(element[0].offsetHeight)
      //   console.log(element)
      // }
    // console.log(foodPosition)
    return (
      <div className="food-images">
       <img src={fig} alt='fifsaf' className='kfs' style={foodPosition}/>
        <img src={fig} alt='fig' className='fig food-image'/>
        <img src={kiwi} alt='kiwi' className='kiwi food-image'/>
        <img src={mint1} alt='mint1' className='mint1 food-image'/>
        <img src={mint2} alt='mint2' className='mint2 food-image'/>
        <img src={mushroom} alt='mushroom' className='mushroom food-image'/>
        <div className='all-seed-images'>
          <img src={seed1} alt='seed1' className='seed1 food-image'/>
          <img src={seed2} alt='seed2' className='seed2 food-image'/>
          <img src={seed3} alt='seed3' className='seed3 food-image'/>
          <img src={seeds} alt='seeds' className='seeds food-image'/>
        </div>
      </div>
    );
  }
}

export default FoodImages;

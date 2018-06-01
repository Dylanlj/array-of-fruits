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
      cssApplied: false,
      originalCoordinates: {
        fig: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        kiwi: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        mint1: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        mint2: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        mushroom: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        seed1: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        seed2: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        seed3: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        },
        seeds: {
          elementPosition:{x: 0, y: 0},
          centerOfElement: {x: 0, y: 0}
        }
      }
    }
    // this.originalPositions = this.originalPositions.bind(this)
  }

  componentDidMount () {
    // document.getElementsByClassName('App').addEventListener('resize', () => {
      //   this.setState({cssApplied: false}, this.setOriginalPositions)
      // })
      window.addEventListener("resize", () => {
        this.setState({cssApplied: false}, this.setOriginalPositions)
      })


      // console.log(document.getElementsByClassName('App'))
    setTimeout(this.setOriginalPositions, 100)
  }

  setOriginalPositions = () => {
    let allFoodCoordinates = {}

    for (let foodName in this.state.originalCoordinates) {
      let element = document.getElementsByClassName(foodName)[0]
      allFoodCoordinates[foodName] = {
        elementPosition: {
          x: element.offsetLeft,
          y:element.offsetTop
        },
        centerOfElement: {
          x: (element.offsetWidth / 2) + element.offsetLeft,
          y: (element.offsetHeight / 2) + element.offsetTop
        }
      }
    }
    // console.log(allFoodCoordinates)
    this.setState({
      originalCoordinates: allFoodCoordinates,
      cssApplied: true
    })
  }


  render() {

    let foodPosition = {}
    let mousePosition = this.props.mousePosition

    if (this.state.cssApplied) {
      for (let foodName in this.state.originalCoordinates) {
        let element = this.state.originalCoordinates[foodName].elementPosition



        let xDif = mousePosition.x - element.x
        let yDif =  mousePosition.y - element.y
        let pythag = Math.sqrt(yDif * yDif + xDif * xDif)

        let left =  (xDif * pythag / -50000 ) + element.x
        let top =  (yDif * pythag / -50000) + element.y
        let blur = pythag / 700
        if (blur < 0.5) {blur = 0.5}

        if (foodName === 'seeds') {
          let center = this.state.originalCoordinates.fig.centerOfElement
          xDif = mousePosition.x - center.x
          yDif = mousePosition.y - center.y
          top = element.y + yDif * -0.01
          left = element.x + xDif * -0.01
          blur = 1.5
        }

        foodPosition[foodName] = {
          positionStyle: {
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            filter: `blur(${blur}px)`
          }
        }
      }
    } else {
      for (let foodName in this.state.originalCoordinates) {
        foodPosition[foodName] = {
          positionStyle: {
          }
        }
      }
    }


    return (
      <div className="food-images">
        <img src={fig} alt='fig' className='fig food-image' style={foodPosition.fig.positionStyle}/>
        <img src={kiwi} alt='kiwi' className='kiwi food-image' style={foodPosition.kiwi.positionStyle}/>
        <img src={mint1} alt='mint1' className='mint1 food-image' style={foodPosition.mint1.positionStyle}/>
        <img src={mint2} alt='mint2' className='mint2 food-image' style={foodPosition.mint2.positionStyle}/>
        <img src={mushroom} alt='mushroom' className='mushroom food-image' style={foodPosition.mushroom.positionStyle}/>
        <div className='all-seed-images'>
          <img src={seed1} alt='seed1' className='seed1 food-image' style={foodPosition.seed1.positionStyle}/>
          <img src={seed2} alt='seed2' className='seed2 food-image' style={foodPosition.seed2.positionStyle}/>
          <img src={seed3} alt='seed3' className='seed3 food-image' style={foodPosition.seed3.positionStyle}/>
          <img src={seeds} alt='seeds' className='seeds food-image' style={foodPosition.seeds.positionStyle}/>
        </div>
      </div>
    );
  }
}

export default FoodImages;

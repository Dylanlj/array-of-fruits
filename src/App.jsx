import React, { Component } from 'react';
import './App.css';
import WrittenContent from './written-content.jsx'
import FoodImages from './food-images.jsx'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mousePosition: {x: 0, y: 0},
      mouseTrail: [],
      mouseCircleClass: 'inactive'
    }
  }


  handleMouseEvent = (event) => {

    let mouseTrail = this.state.mouseTrail
    if (this.state.mouseCircleClass !== 'inactive') {
      console.log('hey')
      mouseTrail.push({x: event.screenX - 50, y: event.screenY - 140})
      if(mouseTrail.length > 50) { mouseTrail.shift() }
    }

    this.setState({mousePosition: {x: event.screenX, y: event.screenY}, mouseTrail: mouseTrail})
  }

  logoAnimation = () => {
    let mouseTrail = []
    for (let i = 0; i < 50; i++) {
      mouseTrail.push(this.state.mousePosition)
    }
    this.setState({
      mouseCircleClass: 'trail',
      mouseTrail: mouseTrail
    })
  }

  removeTrail = () => {
    let mouseTrail = this.state.mouseTrail
    if(mouseTrail.length > 1) {
      this.setState({mouseTrail: mouseTrail.shift()})
      setTimeout(this.removeTrail, 500)
    }
  }

  render() {


        //  <div className={this.state.mouseCircleClass + ' two'} style={{left: this.state.mousePosition.x, top: this.state.mousePosition.y}}/>
        // <div className={this.state.mouseCircleClass + ' three'} style={{left: this.state.mousePosition.x, top: this.state.mousePosition.y}}/>
        // <div className={this.state.mouseCircleClass + ' four'} style={{left: this.state.mousePosition.x, top: this.state.mousePosition.y}}/>
        // <div className={this.state.mouseCircleClass + ' five'} style={{left: this.state.mousePosition.x, top: this.state.mousePosition.y}}/>
        // <div className={this.state.mouseCircleClass + ' six'} style={{left: this.state.mousePosition.x, top: this.state.mousePosition.y}}/>
        let mouseTrail = this.state.mouseTrail
        let style = {}
        if( this.state.mouseCircleClass === 'trail') {
          console.log(mouseTrail.length)
          style = {
            left: mouseTrail[Math.ceil(mouseTrail.length / 2)].x,
            top: mouseTrail[Math.ceil(mouseTrail.length / 2)].y
          }
        }

    return (
      <div className="App" onMouseMove={this.handleMouseEvent.bind(this)}>
        <FoodImages
          mousePosition={this.state.mousePosition}
          fruitShadows={this.state.fruitShadows}
        />
        <WrittenContent
          logoAnimation={this.logoAnimation}
        />
        {this.state.mouseCircles}
        <div className={this.state.mouseCircleClass + ' one'} style={style}/>
      </div>
    );
  }
}

export default App;

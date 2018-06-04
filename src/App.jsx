import React, { Component } from 'react';
import './App.css';
import WrittenContent from './written-content.jsx'
import FoodImages from './food-images.jsx'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mousePosition: {x: 0, y: 0},
      adjustedMouse: {x: 0, y: 0},
      trailPosition: [],
      dots: [],
      dotClass: 'inactive'
    }
  }

  componentWillMount () {
    let startingPosition = []
      for(let i = 0; i < 12; i++) {
        startingPosition.push({x: 0, y: 0})
      }
    this.setState({trailPosition: startingPosition})
  }

  handleMouseEvent = (event) => {
    this.setState({
      mousePosition: {x: event.screenX - 20, y: event.screenY - 120}
    }, this.draw)
  }

  logoAnimation = () => {

    if(this.state.dotClass === 'inactive') {
      let dots = []
      // for(let i = 0; i < 6; i++) {
      //   let d = this.createDot()
      //   dots.push(d)
      // }
      this.setState({dotClass: 'trail', dots: dots}, this.draw )
    } else {
      this.setState({
        dotClass: 'inactive'
      })
    }
  }

  // callDraw = () => {
  //   this.draw()
  //   setTimeout(this.callDraw, 100)
  // }

  draw = () => {
    let dotPositions = this.state.trailPosition
    let mouse = this.state.mousePosition

    for (let i = 0; i < dotPositions.length; i++){
      let nextDot = dotPositions[i + 1] || dotPositions[0]
      dotPositions[i] = {x: mouse.x, y: mouse.y}

      // this.setState({trailPosition: dotPositions})
      // if( (dotPositions[i].x - this.state.mousePosition.x) > 0.4) {
        this.setState({trailPosition: dotPositions})
      // }

      mouse.x += (nextDot.x - mouse.x) * 0.6
      mouse.y += (nextDot.y - mouse.y) * 0.6
    }
  }

  // createDot = () => {

  //   let n = (
  //     <div className='trail' style={{
  //       left: this.state.mousePosition.x + 'px',
  //       top: this.state.mousePosition.y + 'px'
  //       }}
  //     />)
  //   return n;

  // };

//   var Dot = function() {
//   this.x = 0;
//   this.y = 0;
//   this.node = (function(){
//     var n = document.createElement("div");
//     n.className = "trail";
//     document.body.appendChild(n);
//     return n;
//   }());
// };

  render() {

    // while( this.state.dotClass === 'trail') {
    //   setTimeout(this.draw, 500)
    // }

    return (
      <div className="App" onMouseMove={this.handleMouseEvent.bind(this)}>
        <FoodImages
          mousePosition={this.state.mousePosition}
          fruitShadows={this.state.fruitShadows}
        />
        <WrittenContent
          logoAnimation={this.logoAnimation}
        />
        <div className={this.state.dotClass} style={{
          left: this.state.trailPosition[0].x + 'px',
          top: this.state.trailPosition[0].y + 'px'
          }}
        />
                <div className={this.state.dotClass} style={{
          left: this.state.trailPosition[1].x + 'px',
          top: this.state.trailPosition[1].y + 'px'
          }}
        />
                <div className={this.state.dotClass} style={{
          left: this.state.trailPosition[2].x + 'px',
          top: this.state.trailPosition[2].y + 'px'
          }}
        />
                <div className={this.state.dotClass} style={{
          left: this.state.trailPosition[3].x + 'px',
          top: this.state.trailPosition[3].y + 'px'
          }}
        />
                <div className={this.state.dotClass} style={{
          left: this.state.trailPosition[4].x + 'px',
          top: this.state.trailPosition[4].y + 'px'
          }}
        />
                <div className={this.state.dotClass} style={{
          left: this.state.trailPosition[5].x + 'px',
          top: this.state.trailPosition[5].y + 'px'
          }}
        />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import WrittenContent from './written-content.jsx'
import FoodImages from './food-images.jsx'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mousePosition: {x: 0, y: 0},
      trailPosition: [],
      // dots: [],
      dotClass: 'inactive'
    }
  }

  componentWillMount () {
    let startingPosition = []
      for(let i = 0; i < 6; i++) {
        startingPosition.push(this.state.mousePosition)
      }
    this.setState({trailPosition: startingPosition})
  }

  handleMouseEvent = (event) => {
    this.setState({
      mousePosition: {x: event.pageX , y: event.pageY }
    })
  }

  logoAnimation = () => {

    if(this.state.dotClass === 'inactive') {
      let dots = []
      // for(let i = 0; i < 6; i++) {
      //   let d = (<div className={this.state.dotClass} style={{
      //     left: this.state.trailPosition[i].x + 'px',
      //     top: this.state.trailPosition[i].y + 'px'
      //     }}
      //   />)
      //   dots.push(d)
      // }
      document.body.style.cursor = 'none';
      this.setState({dotClass: 'trail', dots: dots}, this.callDraw )
    } else {
      document.body.style.cursor = 'auto';
      this.setState({
        dotClass: 'inactive'
      })
    }
  }

  callDraw = () => {
    this.draw()
    requestAnimationFrame(this.callDraw)
  }

  draw = () => {
    let dotPositions = this.state.trailPosition
    let mouse = this.state.mousePosition

    for (let i = 0; i < dotPositions.length; i++){
      let nextDot = dotPositions[i + 1] || dotPositions[0]
      dotPositions[i] = {x: mouse.x, y: mouse.y}
      console.log(dotPositions)
      // debugger

      this.setState({trailPosition: dotPositions})
      mouse.x += (nextDot.x - dotPositions[i].x) * 0.6
      mouse.y += (nextDot.y - dotPositions[i].y) * 0.6

    }
  }


  render() {

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

import React, { Component } from 'react';
import './App.css';
import WrittenContent from './written-content.jsx'
import FoodImages from './food-images.jsx'
import sateBackground from './assets/images/sate_background.jpg'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mousePosition: {x: 0, y: 0}
    }
  }


  handleChange = (event) => {
    console.log(event)
  }

  handleMouseEvent = (event) => {
    this.setState({mousePosition: {x: event.screenX, y: event.screenY}})
  }


  render() {
    return (
      <div className="App" onMouseMove={this.handleMouseEvent.bind(this)}>
        <FoodImages
          mousePosition={this.state.mousePosition}
          handleChange={this.handleChange}
        />
        <WrittenContent/>
        <img src={sateBackground} alt='sate background' className='sate-background'/>
      </div>
    );
  }
}

export default App;

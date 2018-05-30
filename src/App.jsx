import React, { Component } from 'react';
import './App.css';
import WrittenContent from './written-content.jsx'
import FoodImages from './food-images.jsx'
import sateBackground from './assets/images/sate_background.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodImages/>
        <WrittenContent/>
        <img src={sateBackground} alt='sate background' className='sate-background'/>
      </div>
    );
  }
}

export default App;

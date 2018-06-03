import React, { Component } from 'react';
import facebookIcon         from './assets/images/facebook.svg'
import instagramIcon        from './assets/images/instagram.svg'
import twitterIcon          from './assets/images/twitter.svg'
import sateLogo             from './assets/images/sate_logo.png'
import arrow                from './assets/images/arrow.png'


class WrittenContent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      bodyTextStyle: {}
    }
  }

  sheenAnimation = () => {
    this.setState({bodyTextStyle: {animation: 'sheen 2s'}}, () => {
      setTimeout(() => {this.setState({bodyTextStyle: {}})}, 2000)

    })
  }

  render() {
    return (
      <div className="written-content">
        <img src={sateLogo} alt='sate logo' className='sate-logo'/>
        <div className="written-content-container">
          <div className="body-text" style={this.state.bodyTextStyle} onMouseEnter={this.sheenAnimation}>
            SATE IS A PREMIUM MEAL PLANNING AND DELIVERY SERVICE FOR THOSE WHO TAKE THEIR FITNESS AND NUTRITION SERIOUSLY.
          </div>
          <div className='divider'/>
          <div className="leave-email">
          leave us your email address to learn more:
          <form className='your-email'>
            <input type='text' placeholder='you@email.com'/>
            <img src={arrow} alt='form arrow' className='arrow'/>
          </form>
          </div>
          <div className="media-icons">
            <img src={facebookIcon} alt='facebook icon'/>
            <img src={twitterIcon} alt='twitter icon'/>
            <img src={instagramIcon} alt='instagram icon'/>
          </div>
        </div>
      </div>
    );
  }
}

export default WrittenContent;

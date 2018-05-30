import React, { Component } from 'react';
import facebookIcon         from './assets/images/facebook.svg'
import instagramIcon        from './assets/images/instagram.svg'
import twitterIcon          from './assets/images/twitter.svg'
import sateLogo             from './assets/images/sate_logo.png'



class WrittenContent extends Component {

  render() {
    return (
      <div className="written-content">
      <img src={sateLogo} alt='sate logo' className='sate-logo'/>
        <div className="body-text">
          SATE IF A PREMIUM MEAL PLANNING AND DELIVERY SERVICE FOR THOSE WHO TAKE THEIR FITNESS AND NUTRITION SERIOUSLY.
        </div>
        <div className='divider'/>
        <div className="leave-email">
        leave us your email address to learn more:
        <form className='your-email'>
          <input type='text' placeholder='you@email.com'/>
        </form>
        </div>
        <div className="media-icons">
          <img src={facebookIcon} alt='facebook icon'/>
          <img src={twitterIcon} alt='twitter icon'/>
          <img src={instagramIcon} alt='instagram icon'/>
        </div>
      </div>
    );
  }
}

export default WrittenContent;

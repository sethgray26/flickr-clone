import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './HomePage.css'



export default class PrimarySearchAppBar extends Component {
  constructor() {
    super()
    this.state = {
    };
  }



  render() {

    return (
      <div className='homepage-back-color'>
        < Navbar />
        <div className='sub-nav-bar'>
          wassup
        </div>
        <div className='home-card-holder'>
          <div className='home-display-card'>
          </div>
          <div className='home-display-card'>
          </div>
          <div className='home-display-card'>
          </div>
          <div className='home-display-card'>
          </div>
        </div>
      </div>
    );
  }
}


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
      <div>
        < Navbar />
        <div className='home-display-card'>
    
        </div>
      </div>
    );
  }
}


import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import HomePageCards from './HomePageCards/HomePageCards'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './HomePage.scss'



export default class PrimarySearchAppBar extends Component {
  constructor() {
    super()
    this.state = {
      userPictures: [],
      userInfo: [],
      selectedImage: ''
    };
  }

  componentDidMount() {
    this.getUserImages()
    this.getUserInfo()
  }



  getUserImages = () => {
    axios.get(`/api/userPictures`).then(res => {
      this.setState({ userPictures: res.data })
    })
  }

  getUserInfo = () => {
    axios.get(`/api/profile`).then(res => {
      this.setState({ userInfo: res.data })
    })
  }



  render() {
    let displayUserImages = this.state.userPictures.map((image, index) => {
      return (
        <HomePageCards image={image} key={index} />
      )
    })


    return (
      <div className='homepage-backdrop' >
        < Navbar />
        <div className='sub-nav'>
          <div className='sub-nav-content'>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab id='hover-blueBar' label='All Activity' href='/#/Explore' />
              <Tab id='hover-blueBar' label='Profile' href='/#/Profile' />
            </Tabs>
          </div>
        </div>

        <div className='homepage-card-holder'>
          {displayUserImages}
        </div>

      </div>
    );
  }
}

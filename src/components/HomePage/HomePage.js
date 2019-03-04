import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import HomePageCards from './HomePageCards/HomePageCards'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './HomePage.css'



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
      // console.log(res.data)
    })
  }

  getUserInfo = () => {
    axios.get(`/api/profile`).then(res => {
      this.setState({ userInfo: res.data })
      console.log(res.data)
    })
  }



  render() {
    let displayUserImages = this.state.userPictures.map((image, index) => {
      return (
        <HomePageCards image={image} key={index} />
      )
    })
    let displayUserInfo = Object.keys(this.state.userInfo).map((name, index) => {
      // console.log(name)
      return (
        <HomePageCards name key={index} />
      )
    })

    return (
      <div className='homepage-backdrop' >
        < Navbar />
        <div className='homepage-subnav'>
          <div className='homepage-subnav-content'>
            <Tabs
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              style={{ marginLeft: 60 }}
              value={2}
            >
              <Tab id='tabs-bottombar' label='All Activity' href='/#/Explore' />
              <Tab id='tabs-bottombar' label='People' href='/#/People' />
              <Tab id='tabs-bottombar' label='Groups' href='/#/People' />
            </Tabs>
          </div>
        </div>

        <div className='homepage-card-holder'>
          {displayUserImages}
          {/* {displayUserInfo} */}
        </div>

      </div>
    );
  }
}
import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Card from '@material-ui/core/Card';
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './HomePage.css'



export default class PrimarySearchAppBar extends Component {
  constructor() {
    super()
    this.state = {
    };
  }

  render() {
    return (
      <div className='homepage-backdrop'>
        < Navbar />
        <div className='homepage-subnav'>
          <div className='homepage-subnav-content'>
            <Tabs
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              style={{ marginLeft: 60 }}
            >
              <Tab id='tabs-bottombar' label='All Activity' href='/#/Explore' />
              <Tab id='tabs-bottombar' label='People' href='/#/People' />
              <Tab id='tabs-bottombar' label='Groups' href='/#/People' />
            </Tabs>
          </div>
        </div>
        <div className='homepage-card-holder'>
          <Card >
            <Link to='/Playground'> playground </Link>
          </Card>
        </div>

      </div>
    );
  }
}
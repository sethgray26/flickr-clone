import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import UserPictures from './UserPictures.Modals/UserPictures'
import ProfileBio from './ProfileBio/ProfileBio'
import './Profile.scss'


export default class Profile extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {

        }
    }

    render() {
        return (
            <div className='profile-page'>
                <Navbar />
                <div className='profile-back-img'>
                </div>
                <div className='profile-mini-nav'>
                    <div className='profile-mini-nav-content'>
                        <Tabs
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            style={{marginLeft: 150}}
                            value={1}
                        >
                            <Tab id='profileTabs-bottombar' label='About' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Photostream' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Albums' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Faves' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Galleries' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Groups' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Stats' href='/#/Profile' />
                            <Tab id='profileTabs-bottombar' label='Camera Roll' href='/#/Profile' />
                        </Tabs>

                    </div>

                </div>

                <div className='profile-about-display'>
                    <div className='profile-bio'>
                        <ProfileBio />
                    </div>

                    <UserPictures />
                    
                </div>
            </div >
        )
    }
}
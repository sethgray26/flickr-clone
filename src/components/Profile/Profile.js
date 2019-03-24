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
            <div id='profile-page'>
                <Navbar />
                <div className='bg-color'>

                    <div className='profile-back-img'>
                    </div>



                    <div className='sub-nav'>
                        <div className='sub-nav-content'>
                            <Tabs
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab id='hover-blueBar' label='About' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Photostream' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Albums' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Faves' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Galleries' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Groups' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Stats' href='/#/Profile' />
                                <Tab id='hover-blueBar' label='Camera Roll' href='/#/Profile' />
                            </Tabs>

                        </div>

                    </div>


                    <div className='profile-about-display'>
                        <div className='profile-bio'>
                            <ProfileBio />
                        </div>
                        <UserPictures />

                    </div>
                </div>
            </div >
        )
    }
}
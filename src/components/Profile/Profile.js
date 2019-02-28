import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import UserPictures from './UserPictures'
import ProfileBio from './ProfileBio'
import './Profile.css'


export default class Profile extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            first_name: " ",
            last_name: '',
            profile_pic: '',
            background_pic: '',
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='profile-back-img'>
                </div>
                <div className='profile-mini-nav'>
                </div>
                <div className='profile-about-display'>
                    <div className='profile-bio'>
                        <ProfileBio />
                    </div>
                    <div className='profile-images'>
                        <UserPictures />
                    </div>
                </div>
            </div >
        )
    }
}
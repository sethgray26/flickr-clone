import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import UserPictures from './UserPictures.Modals/UserPictures'
import ProfileBio from './ProfileBio/ProfileBio'
import './Profile.css'


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
                </div>
                <div className='profile-about-display'>

                    <div className='profile-bio'>
                        <ProfileBio />
                    </div>

                    <hr />

                    <div className='media-gallery-thumbnails'>
                        <UserPictures />
                    </div>
                </div>
            </div >
        )
    }
}
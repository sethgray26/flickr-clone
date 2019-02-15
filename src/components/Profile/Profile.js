import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Profile.css'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "first_name": " ",
            "last_name": '',
            "profile_pic": '',
            "background_pic": '',
            
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
                </div>
            </div>
        )
    }
}
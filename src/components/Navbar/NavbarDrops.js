import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarDrops.css'

export default class NavbarDrops extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div className="you-dropdown">
                    <button className="you-drop-btn"> You </button>
                    <div className="you-drop-content">
                        <a href="#"> About </a>
                        <a href="#"> Photostream </a>
                        <a href="#"> Albums </a>
                        <a href='#'> Faves </a>
                        <a href='#'> Galleries </a>
                        <a href='#'> Groups </a>
                        <a href='#'> Camera Roll</a>
                        <hr />
                        <a href='#'> Recent Activity </a>
                        <a href='#'> People </a>
                        <a href='#'> Organize </a>
                    </div>
                </div>

                <div className='explore-dropdown'>
                    <button className='explore-drop-btn'> Explore </button>
                    <div className='explore-drop-content'>
                        <a href="#"> Recent Photos </a>
                        <a href='#'> Trending </a>
                        <a href="#"> Flickr VR </a>
                        <a href='#'> The Commons </a>
                        <a href="#"> Galleries </a>
                        <a href='#'> World Map </a>
                        <a href='#'> Camera Finder </a>
                        <a href='#'> The Weekly Flickr </a>
                        <a href='#'> Flickr Blog </a>
                    </div>
                </div>
            </div>
        )
    }
}

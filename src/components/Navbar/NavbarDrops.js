import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarDrops.scss'

export default class NavbarDrops extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className='nav-drop-holder'>



                <div className="you-dropdown">
                    <Link to='/profile'>
                        <button className='explore-drop-btn'>
                            You
                        </button>
                    </Link>
                    <div className="you-drop-content">
                        <Link to='/Profile'> About </Link>
                        <Link to='/Profile'> Photostream </Link>
                        <Link to='/Profile'> Albums </Link>
                        <Link to='/Profile'> Faves </Link>
                        <Link to='/Profile'> Galleries </Link>
                        <Link to='/Profile'> Groups </Link>
                        <Link to='/Profile'> Camera Roll </Link>
                        <hr />
                        <Link to='/Profile'> Recent Activity</Link>
                        <Link to='/Profile'> People </Link>
                        <Link to='/Profile'> Organize </Link>
                    </div>
                </div>

                <div className='explore-dropdown'>
                    <Link to='/Explore'>
                        <button className='explore-drop-btn'>
                            Explore
                        </button>
                    </Link>
                    <div className='explore-drop-content'>
                        <Link to='/Explore'> Recent Photos </Link>
                        <Link to='/Explore'> Trending </Link>
                        <Link to='/Explore'> Flickr VR </Link>
                        <Link to='/Explore'> The Commons </Link>
                        <Link to='/Explore'> Galleries </Link>
                        <Link to='/Explore'> World Map </Link>
                        <Link to='/Explore'> Camera Finder </Link>
                        <Link to='/Explore'> The Weekly Flickr </Link>
                        <Link to='/Explore'> Flickr Blog </Link>
                    </div>
                </div>
            </div>
        )
    }
}

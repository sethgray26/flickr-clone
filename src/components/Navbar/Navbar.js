import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flickrLogo from '../../photos/flickrLogo.svg'
import NavbarDrops from './NavbarDrops'
import './Navbar.css'


export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div className='nav-black-bar'>
                    <Link to='/HomePage'>
                        <img className='home-image-link' src={flickrLogo} alt='' />
                    </Link>
                    <NavbarDrops />
                </div>

            </div>
        )
    }
}
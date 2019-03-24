import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';
import flickrLogo from '../../photos/flickrLogo.svg'
import NavbarDrops from './NavbarDrops'
import devmtnLogo from '../../photos/devmtnLogo.png'
import './Navbar.scss'



class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: []
        }
    }

    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo = () => {
        axios.get(`/api/profile`).then(res => {
            this.setState({ userInfo: res.data })
        })
    }


    render() {
        return (
            <div className='navBar'>


                <div className='nav-left'>
                    <div className='logo'>
                        <Link to='/homepage'>
                            <img src={flickrLogo} alt='' />
                        </Link>
                    </div>

                    <NavbarDrops />
                    <div id='nav-item'>
                        <a href='#/upload'>
                            Create
                    </a>
                    </div>
                    <div id='nav-item'>Get Pro</div>
                </div>


                <div className='nav-right'>

                    <div className='nav-search'>
                        <form className='nav-search-form'>
                            <SearchIcon className='nav-searchIcon' />
                            <InputBase
                                className='nav-inputBase'
                                placeholder='Search Feature Being Rebuilt'
                                style={{ color: 'black' }}
                            />
                        </form>
                    </div>

                    <div className='nav-upload'>
                        <Link to='/upload'>
                            <CloudUploadIcon className='nav-upload-link' />
                        </Link>
                    </div>

                    <div className='nav-notifications'>
                        <NotificationsIcon className='nav-notif-icon' />
                    </div>

                    <div className='nav-profile-actions'>
                        <Link to='/Profile'>
                            <Avatar
                                className='avatar-icon'
                                src={devmtnLogo}
                                alt='User Avatar'
                            />
                        </Link>

                        <div className='avatar-drop-content'>
                            <p> Hello, {this.state.userInfo.first_name}!</p>
                            <Link to='/Profile'> My Account </Link>
                            <a href='/'> Logout </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default (Navbar);
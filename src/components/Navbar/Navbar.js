import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';
import flickrLogo from '../../photos/flickrLogo.svg'
import NavbarDrops from './NavbarDrops'
import devmtnLogo from '../../photos/devmtnLogo.png'
import './Navbar.scss'

// const styles = theme => ({
//     grow: {
//         flexGrow: 1,
//     },
//     search: {
//         position: 'absolute',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade('#efefef', 0.9),
//         '&:hover': {
//             backgroundColor: fade('#FFFFFF', .9),
//         },
//         marginLeft: '-38vw',
//         marginTop: '-17px',
//         width: '25vw',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing.unit,
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         width: theme.spacing.unit * 3,
//         // marginLeft: 3,
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'gray',
//         width: '100%',
//     },
//     inputInput: {
//         paddingTop: theme.spacing.unit,
//         paddingRight: theme.spacing.unit,
//         paddingBottom: theme.spacing.unit,
//         paddingLeft: theme.spacing.unit * 4,
//         transition: theme.transitions.create('width'),
//         width: '150%',
//         [theme.breakpoints.up('sm')]: {
//             width: 160,
//             '&:focus': {
//                 width: 200,
//             },
//         },
//     },
// });


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
                        <img src={flickrLogo} alt='' />
                    </div>
                    <div id='nav-item'>You</div>
                    <div id='nav-item'>Explore</div>
                    <div id='nav-item'>Create</div>
                    <div id='nav-item'>Get Pro</div>
                </div>


                <div className='nav-right'>

                    <div className='nav-search'>
                        <form className='nav-search-form'>
                            <SearchIcon className='nav-searchIcon' />
                            <InputBase
                                className='nav-inputBase'
                                placeholder='Search Feature Currently Being Redesigned'
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



                    {/* <div className='avatar-dropdown'>
                        <Link to='/Profile'>
                            <Avatar
                                alt="User Avatar"
                                src={devmtnLogo}
                            />
                        </Link>

                        <div className='avatar-drop-content'>
                            <p> Hello, {this.state.userInfo.first_name}!</p>
                            <Link to='/Profile'> My Account </Link>
                            <a href='/'> Logout </a>
                        </div>
                    </div> */}

                </div>



                {/* <div className='nav-black-bar'>
                    <div className='navbar-center'>
                        <Link to='/HomePage'>
                            <img className='home-image-link' src={flickrLogo} alt='' />
                        </Link>
                        <NavbarDrops />
                        <p className='nav-create' id='nav-item'> Create </p>
                        <p className='nav-getPro' id='nav-item'> Get Pro </p>
                        <div className={classes.root}
                        >
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            </IconButton>
                            <div className={classes.grow} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Photos, people, or groups"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}

                                />
                            </div>
                        </div>
                        <Link to='/upload'
                        >
                            <CloudUploadIcon
                                className={classes.rightIcon}
                            /> </Link>

                        <NotificationsIcon
                            className={classes.rightIcon}
                        />


                        <div className='avatar-dropdown'>
                            <Link to='/Profile'>
                                <Avatar
                                    alt="User Avatar"
                                    src={devmtnLogo}
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



 */}



            </div>
        )
    }
}

export default (Navbar);
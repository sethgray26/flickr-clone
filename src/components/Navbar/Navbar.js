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
import './Navbar.css'

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'absolute',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#efefef', 0.9),
        '&:hover': {
            backgroundColor: fade('#FFFFFF', .9),
        },
        marginLeft: '-38vw',
        marginTop: '-17px',
        width: '25vw',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 3,
        // marginLeft: 3,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    inputRoot: {
        color: 'gray',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 4,
        transition: theme.transitions.create('width'),
        width: '150%',
        [theme.breakpoints.up('sm')]: {
            width: 160,
            '&:focus': {
                width: 200,
            },
        },
    },
});


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
        const { classes } = this.props;
        return (
            <div className='navBar'>
                <div className='nav-black-bar'>
                    <div className='navbar-center'>
                        <Link to='/HomePage'>
                            <img className='home-image-link' src={flickrLogo} alt='' />
                        </Link>
                        <NavbarDrops />
                        <p className='nav-create'> Create </p>
                        <p className='nav-getPro'> Get Pro </p>
                        <div className={classes.root}
                            style={{ marginLeft: -300 }}
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
                                    style={{ fontSize: 12, marginRight: 40 }}

                                />
                            </div>
                        </div>
                        <Link to='/upload'
                            style={{ marginRight: -260 }}
                        >
                            <CloudUploadIcon
                                className={classes.rightIcon}
                                style={{ color: 'white', marginTop: 10, height: 30, width: 50, cursor: 'pointer' }}
                            /> </Link>

                        <NotificationsIcon
                            className={classes.rightIcon}
                            style={{ marginRight: -250, color: 'white', marginTop: 10, height: 30, width: 50, cursor: 'pointer' }}
                        />


                        <div className='avatar-dropdown'>
                            <Link to='/Profile'>
                                <Avatar
                                    alt="User Avatar"
                                    src={devmtnLogo}
                                    style={{ marginTop: 7, marginLeft: 5, height: 35, width: 35, cursor: 'pointer' }} />
                            </Link>

                            <div class='avatar-drop-content'>
                                <p> Hello, {this.state.userInfo.first_name}!</p>
                                <Link to='/Profile'> My Account </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);

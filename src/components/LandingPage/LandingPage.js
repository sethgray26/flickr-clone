import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase'
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button'
import flickrLogo from '../../photos/flickrLogo.svg'
import './LandingPage.css'





const styles = theme => ({
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 3,
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    }
});

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    

    render() {
        return (
            <div id='landingpage' >
                <div className='landing-nav'>
                    <div className='flickr-logo' >
                            <img src={flickrLogo} alt=''></img>
                    </div>

                    <div className='landing-search'>
                        <SearchIcon />
                        <InputBase />
                    </div>

                    <Link to='Signin'> <h4 className='login-link'> Log In </h4> </Link>
                    <Button className='nav-signup-btn' variant='contained' component={Link} to='/Signup'
                        style={{ marginTop: 15, marginRight: 24, backgroundColor: 'white' }}
                    > Sign up </Button>
                </div>
                <div className='landing-text'>
                    <h1 className='landing-top-text'> Find Your Inspiration.</h1>
                    <h2 className='landing-mid-text'> Join the Flickr community, home to tens of billions of </h2>
                    <h2 className='landing-bottom-text'>photos and 2 million groups. </h2>
                </div>
                <Button variant='contained' component={Link} to='/Signup' style={{ marginLeft: '43.7vw', marginTop: '3vh', height: "4rem", width: '12.8rem', fontSize: 19, backgroundColor: 'white', fontWeight: 600 }}> Sign Up </Button>
                <div className='landing-footer'>
                    <div className='foot-nav'>
                        <p> About </p>
                        <p> Jobs </p>
                        <p> Blog </p>
                        <p> Developers </p>
                        <p> Guidelines </p>
                        <p> Privacy </p>
                        <p> Terms </p>
                        <p> Help forum </p>
                        <p> English </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(LandingPage)
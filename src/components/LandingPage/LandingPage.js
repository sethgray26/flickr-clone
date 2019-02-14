import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase'
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
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
                        <Link to='HomePage'> <h1> flickr </h1>  </Link>
                    </div>

                    <div className='landing-search'>
                        <SearchIcon />
                        <InputBase />
                    </div>

                    <Link to='Signin'> <h4> Log In </h4> </Link>
                    <Link to='Signup'> <button> Sign Up </button> </Link>
                </div>
                <div className='landing-text'>
                    <h1> Find Your Inspiration.</h1>
                    <h2> Join the Flickr community, home to tens of billions of </h2>
                    <h2>photos and 2 million groups. </h2>
                    <button> Sign Up </button>
                </div>
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
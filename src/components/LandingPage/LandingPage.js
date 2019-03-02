import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase'
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button'
import flickrLogo from '../../photos/flickrLogo.svg'
import './LandingPage.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import kitten1 from '../../photos/kitten1.jpg'
import kitten2 from '../../photos/kitten2.jpg'
import kitten3 from '../../photos/kitten3.jpg'
import { Hidden } from '@material-ui/core';



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
        const settings = {
            // infinite: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1200,
            fade: true,
            fadeSpeed: 1200
        };
        return (
            <div id='landingpage' style={{overflowX: Hidden, overflowY: Hidden}}>
                <div className='fadeimgholder'>
                    <img id='fadeImg-1' src='https://i.pinimg.com/originals/5b/27/ee/5b27ee4e7ded85ef8f6e87141273d92b.jpg' alt='' />
                    <img id='fadeImg-2' src='https://wallpaperplay.com/walls/full/d/7/4/13602.jpg' alt='' />
                    <img id='fadeImg-3' src='https://i.pinimg.com/originals/5c/4b/67/5c4b672e04cc92914959cc8e9e8125c7.jpg' alt='' />
                    <img id='fadeImg-4' src='https://shchd.org/app/uploads/2019/01/background-calm-clouds-747964.jpg' alt='' />
                </div>
                <div className='landing-nav'>
                    <div className='flickr-logo' ><img src={flickrLogo} alt=''></img></div>

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
                    <h2 className='landing-bottom-text'> photos and 2 million groups. </h2>
                </div>
                <Button variant='contained' component={Link} to='/Signup' style={{ marginLeft: '43.7vw', marginTop: '3vh', height: "4rem", width: '12.8rem', fontSize: 19, backgroundColor: 'white', fontWeight: 600 }}> Sign Up </Button>
                {/* <div className='landingpageSlider'>
                    <Slider {...settings}>
                        <div className='kitten1'> <img src={kitten1} alt='' /> </div>
                        <div className='kitten1'> <img src={kitten2} alt='' /> </div>
                        <div className='kitten1'> <img src={kitten3} alt='' /> </div>
                        <div className='kitten1'> <img src={kitten1} alt='' /> </div>
                        <div className='kitten1'> <img src={kitten2} alt='' /> </div>
                        <div className='kitten1'> <img src={kitten3} alt='' /> </div>
                    </Slider>
                </div> */}

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




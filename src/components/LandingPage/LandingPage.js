import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import flickrLogo from '../../photos/flickrLogo.svg'


import LandingFooterPopUp from './LandingFooterPopup'
import './LandingPage.scss'
import './LandingFooterPopUp.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hidden } from '@material-ui/core';






class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            showPopup: false
        }
    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {

        return (

            <div id='landing-page-main'>

                <div className='landing-nav-container'>
                    {/*  */}
                    <div className='landing-logo'>
                        Logo
                    </div>
                    {/*  */}

                    <ul className='landing-nav-tools'>
                        <li className='landing-search'>
                            <form className='landing-search-form'>
                                <SearchIcon />
                                <InputBase />
                            </form>
                        </li>
                        <li> <a> Log In </a></li>
                        {/* <Link to='Signin'> <h4 className='login-link'> Log In </h4> </Link> */}
                        <li>
                            <Button className='nav-signup-btn' variant='contained' component={Link} to='/Signup'
                            > Sign up </Button>
                        </li>
                    </ul>

                </div>
                <div className='landing-middle-holder'>
                    <div className='landing-center-container'>
                        <h1 className='landing-top-text'> Find your inspiration.</h1>
                        <h3 className='landing-mid-text'> Join the Flickr community, home to tens of billions of photos and 2 million groups.</h3>
                        {/* <h2 className='landing-bottom-text'>  </h2> */}
                        <Button variant='contained' component={Link} to='/Signup'
                        > Sign Up </Button>
                    </div>
                </div>

                <div className='landing-footer-container'>

                    <div className='footer-nav'>
                        <div className='footer-pop-up'>
                            {/* Ternary rendering the popup display based on if it has been clicked */}
                            {this.state.showPopup ?
                                <LandingFooterPopUp closePopUp={(this.togglePopup)} /> : null}
                        </div>
                        <p onClick={() => this.togglePopup()}> About </p>
                        <p onClick={() => this.togglePopup()}> Jobs </p>
                        <p onClick={() => this.togglePopup()}> Blog </p>
                        <p onClick={() => this.togglePopup()}> Developers </p>
                        <p onClick={() => this.togglePopup()}> Guidelines </p>
                        <p onClick={() => this.togglePopup()}> Privacy </p>
                        <p onClick={() => this.togglePopup()}> Terms </p>
                        <p onClick={() => this.togglePopup()}> Help forum </p>
                        <p onClick={() => this.togglePopup()}> English </p>
                    </div>
                </div>

            </div>
        )
    }
}

// export default withStyles(styles)(LandingPage)
export default LandingPage





import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import flickrLogo from '../../photos/flickrLogo.svg'

import LandingFooterPopUp from './LandingFooterPopup'
import './LandingPage.scss'
import './LandingFooterPopUp.scss'


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

            <div id='landing-bg-img'>
                <div id='dim-overlay'>


                    <div className='landing-navBar'>

                        <div className='landing-nav-left'>
                            <div className='logo'>
                                <img src={flickrLogo} alt='' />
                            </div>
                        </div>


                        <div className='landing-nav-mid'>
                            <div className='landing-search'>
                                <form className='landing-search-form'>
                                    <SearchIcon className='searchIcon' />
                                    <InputBase
                                        className='inputBase'
                                        placeholder='This Search Feature Is Currently Being Redesigned , Functionality Is Coming In A Future Update'
                                        style={{ color: 'black' }}
                                    />
                                </form>
                            </div>
                        </div>

                        <div className='landing-nav-right'>
                            <div className='landing-nav-sigin'>
                                <Link className='nav-signin' to='Signin'> <p> Log In </p> </Link>
                            </div>

                            <div className='landing-nav-signup'>
                                <Button className='nav-signup' variant='contained' component={Link} to='/Signup'
                                > Sign up </Button>
                            </div>
                        </div>

                    </div>


                    <div className='login-default'>
                        <h3>Website is currently in dev mode. To quickly access the website without creating account use username: 's' and password: 's' to login!</h3>
                    </div>
                    <div className='landing-center-container'>
                        <div className='landing-text'>
                            <h1 className='top-text'> Find your inspiration.</h1>
                            <h3 className='mid-text'> Join the Flickr community, home to tens of billions of </h3>
                            <h3 className='bot-text'>photos and 2 million groups </h3>
                        </div>

                        <div className='center-btn'>
                            <Button className='center-signup' variant='contained' component={Link} to='/Signup'
                            > Sign Up</Button>
                        </div>
                    </div>


                    <div className='landing-footer-container'>

                        <div className='footer-nav'>
                            <div className='footer-pop-up'>
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
            </div>
        )
    }
}

export default LandingPage





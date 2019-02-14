import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flickrLogo from '../../photos/flickrLogo.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './Signin.css'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='signin-page'>
                <div className='black-bar-top'>
                    <img src={flickrLogo} className='flickrLogo'></img>
                </div>
                <div className='login-card'>
                    <div className='two-circles'>
                        <div className='blue-circle'></div>
                        <div className='pink-circle'></div>
                    </div>
                    <h3> Log in to Flickr </h3>
                    <h4 className='login-top-text'> We're updating how Flickr members
                    <h4 className='login-middle-text'>log in. You'll still use your Yahoo login </h4>
                        <h4 className='login-bottom-text'> until further notice.
                     </h4>
                    </h4>
                    <TextField
                        id="outlined-email-input"
                        label="Email address"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        style={{ marginTop: -3, width: 268 }}
                    />
                    <Button className='signin-continue-btn' variant='contained' color='primary' component={Link} to='HomePage' style={{ marginTop: 20, width: 268, height: 40 }}> Next </Button>
                    <h4 className='login-signup-link'> Not a flickr member? <Link to='Signup'> Sign up here. </Link> </h4>
                </div>
            </div>
        )
    }
}
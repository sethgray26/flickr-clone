import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flickrLogo from '../../photos/flickrLogo.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './Signin.css'
import axios from 'axios';

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            first_name: ' ',
            last_name: ' ',
            email: ' ',
            password: ' '
        }
    }

    async login() {
        const { first_name, last_name, email, password } = this.state
        const res = await axios.post('/api/login', { first_name: first_name, last_name: last_name, email: email, password: password })
        if (res.data.loggedIn) {
            this.props.history.push('/HomePage')
        }
    }

    render() {
        return (
            <div className='signin-page'>
                <div className='black-bar-top'>
                    <Link to='/'>
                        <img src={flickrLogo} alt='' className='flickrLogo'></img>
                    </Link>
                </div>
                <div className='login-card'>
                    <div className='two-circles'>
                        <div className='blue-circle' />
                        <div className='pink-circle' />
                    </div>
                    <h3 className='login-card-header'> Log in to Flickr </h3>
                    <div>
                        <h4 className='login-top-text'> We're updating how Flickr members </h4>
                        <h4 className='login-middle-text'>log in. You'll still use your Yahoo login </h4>
                        <h4 className='login-bottom-text'> until further notice. </h4>
                    </div>
                    <TextField
                        id="outlined-email-input"
                        label="Email address"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        style={{ marginTop: -40, width: 280 }}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="password"
                        margin="normal"
                        variant="outlined"
                        style={{ marginTop: -20, width: 280 }}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    <Button className='signin-continue-btn' variant='contained' color='primary' component={Link} to='HomePage'
                        style={{ marginTop: -20, width:280, height: 40 }}
                        onClick={() => this.login()}
                    > Next
                     </Button>
                    <h4 className='login-signup-link'> Not a flickr member? <Link to='Signup'> Sign up here. </Link> </h4>
                </div>
            </div >
        )
    }
}
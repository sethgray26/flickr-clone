import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flickrLogo from '../../photos/flickrLogo.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './Signin.scss'
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
            <div id='signin-bg-image'>
                <div id='signin-page-container'>


                    <div className='black-bar'>
                        <div className='logo'>
                            <Link to='/'>
                                <img src={flickrLogo} alt='' />
                            </Link>
                        </div>
                    </div>


                    <div className='login-card'>

                        <div className='login-top-box'>

                            <div className='two-circles'>
                                <div className='blue-circle' />
                                <div className='pink-circle' />
                            </div>

                            <h3 className='login-card-header'> Log in to Flickr </h3>
                            <div className='login-top-box-mainText'>
                                <h4 className='login-top-text'> We're updating how Flickr members </h4>
                                <h4 className='login-middle-text'>log in. You'll still use your Yahoo login </h4>
                                <h4 className='login-bottom-text'> until further notice. </h4>
                            </div>
                        </div>


                        <div className='login-mid-box'>

                            <TextField
                                className="login-card-textfield"
                                label="Email address"
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                            <TextField
                                className="login-card-textfield"
                                label="Password"
                                type="password"
                                name="password"
                                autoComplete="password"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                            <Button
                                className='signin-continue-btn'
                                variant='contained'
                                color='primary'
                                component={Link} to='HomePage'
                                onClick={() => this.login()}
                            > Next
                     </Button>
                        </div>




                        <h4 className='login-signup-link'> Not a flickr member? <Link to='Signup'> Sign up here. </Link> </h4>
                    </div>
                </div>
            </div >
        )
    }
}
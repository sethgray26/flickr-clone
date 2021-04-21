import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import flickrDots from "../../Assets/images/flickr_dots.svg"

import './Signup.scss'
import axios from 'axios';


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: ' ',
            last_name: ' ',
            email: ' ',
            password: ' '
        }
    }

    async register() {
        const { first_name, last_name, email, password } = this.state
        const res = await axios.post('/api/register', { first_name: first_name, last_name: last_name, email: email, password: password })
        if (res.data.loggedIn) {
            this.props.history.push('/HomePage')
        }
    }

    render() {
        return (
            <div className="signup-container flex-column-center-center">
                <div className="register-card flex-column-center-center">

                    {/* <section className="card-top"> */}
                        <img src={flickrDots} />
                        <h3> Signup for Flickr </h3>
                    {/* </section> */}

                    <section className="card-main">
                        <form className='signup-form' noValidate autoComplete="off">

                            <TextField className="form-field" variant="outlined" fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(ele) => this.setState({ first_name: ele.target.value })}
                                placeholder="First Name"
                            />

                            <TextField className="form-field" variant="outlined" fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(ele) => this.setState({ last_name: ele.target.value })}
                                placeholder="Last Name"
                            />

                            <TextField className="form-field" variant="outlined" fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(ele) => this.setState({ email: ele.target.value })}
                                placeholder="Email Address"
                            />

                            <TextField className="form-field" variant="outlined" fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(ele) => this.setState({ password: ele.target.value })}
                                placeholder="Password"
                            />
                        </form>
                    </section>

                    <section className="card-submit">
                        <Link className='submit-button'
                                onClick={() => this.register()}
                                to='HomePage'>
                            Sign Up
                        </Link>
                    </section>

                </div>
            </div>
            // <div className='Signup-background'>

            //     <div className='registration-box'>

            //         <div className='signup-top'>
            //             <h3> Sign Up</h3>
            //             <p> Use your current email address </p>
            //         </div>

            // <form className='signup-form' noValidate autoComplete="off">
            //     <TextField
            //         className="first-name"
            //         placeholder="First Name"
            //         margin="normal"
            //         InputLabelProps={{
            //             shrink: true
            //         }}
            //         onChange={(e) => this.setState({ first_name: e.target.value })}
            //     />
            //             <TextField
            //                 className="last-name"
            //                 placeholder="Last Name"
            //                 margin="normal"
            //                 InputLabelProps={{
            //                     shrink: true
            //                 }}
            //                 onChange={(e) => this.setState({ last_name: e.target.value })}
            //             />
            //             <TextField
            //                 className="email-address"
            //                 placeholder="Your Email Address"
            //                 fullWidth
            //                 margin="normal"
            //                 InputLabelProps={{
            //                     shrink: true
            //                 }}
            //                 onChange={(e) => this.setState({ email: e.target.value })}
            //             />
            //             <TextField
            //                 className="password"
            //                 placeholder="Password"
            //                 fullWidth
            //                 margin="normal"
            //                 InputLabelProps={{
            //                     shrink: true
            //                 }}
            //                 type='password'
            //                 onChange={(e) => this.setState({ password: e.target.value })}
            //             />

            //         </form>

            //         <div className='below-form'>
            //             <div className='agree-to-terms'>
            //                 <h5> By clicking "Continue", you agree to the Terms and </h5>
            //                 <h5 className='privacy-policy'>Privacy Policy </h5>
            //             </div>

                        // <div className='form-btn'>
                        //     <Button className='continue-btn' variant='contained' color='primary' component={Link} to='HomePage'
                        //         onClick={() => this.register()}> Continue </Button>
                        // </div>

            //             <h5 className='already-account'>
            //                 Already have an account?
            //               <Link className='link-to-signin' to='Signin'> Sign In </Link> </h5>
            //         </div>


            //     </div>

            // </div>
        )
    }
}
// export default withStyles(styles)(Signup);
export default Signup

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import './Signup.css'
import axios from 'axios';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 100,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 50,
    },
});


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
        // this.props.getUserData(res.data.userData.first_name, res.data.userData.last_name, res.data.userData.profile_pic, res.data.userData.email)
    }

    render() {
        return (
            <div className='Signup-background'>

                <div className='registration-box'>
                    <div className='signup-top'>
                        <h3> Sign Up</h3>
                        <p> Use your current email address </p>
                    </div>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="first-name"
                            placeholder="First Name"
                            style={{ margin: 25, width: 120 }}
                            className={TextField}
                            margin="normal"
                            onChange={(e) => this.setState({ first_name: e.target.value })}
                        />
                        <TextField
                            id="last-name"
                            placeholder="Last Name"
                            style={{ marginRight: 25, marginTop: 25.5, width: 120 }}
                            className={TextField}
                            margin="normal"
                            onChange={(e) => this.setState({ last_name: e.target.value })}
                        />
                        <TextField
                            id="email-address"
                            placeholder="Your Email Address"
                            style={{ margin: 25, marginTop: -2 }}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <TextField
                            id="password"
                            placeholder="Password"
                            style={{ margin: 25, marginTop: -2 }}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                            type='password'
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <FormControl
                            style={{ marginLeft: 25, marginTop: -25 }} autoComplete="off" >
                            <InputLabel htmlFor="age-simple">Birth Month</InputLabel>
                            <Select>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem> January </MenuItem>
                                <MenuItem> February </MenuItem>
                                <MenuItem> March </MenuItem>
                                <MenuItem> April </MenuItem>
                                <MenuItem> May </MenuItem>
                                <MenuItem> June </MenuItem>
                                <MenuItem> July </MenuItem>
                                <MenuItem> August </MenuItem>
                                <MenuItem> September </MenuItem>
                                <MenuItem> October </MenuItem>
                                <MenuItem> November </MenuItem>
                                <MenuItem> December </MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="birth-day"
                            placeholder="Day"
                            style={{ marginRight: 60, marginTop: -9, width: 100 }}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="birth-year"
                            placeholder="year"
                            style={{ marginLeft: -70, marginTop: -9, width: 70, marginRight: 25 }}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </form>
                    <h6 className='agree-to-terms' style={{ marginLeft: 55 }}> By clicking "Continue", you agree to the Terms and <p style={{ marginLeft: 90, marginBottom: -20, marginTop: 0 }}>Privacy Policy </p></h6>
                    <div className='continue-button'>
                        <Button variant='contained' color='primary' component={Link}  to='HomePage' style={{ width: 345, margin: 25 }} onClick={() => this.register()}> Continue </Button>
                    </div>
                    <h5 className='already-account'> Already have an account? <Link className='link-to-signin' to='Signin'> Sign In </Link> </h5>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Signup);

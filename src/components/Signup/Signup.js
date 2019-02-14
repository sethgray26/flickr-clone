import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
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
        const res = await axios.post('/Signup', { first_name: first_name, last_name: last_name, email: email, password: password })
        if (res.data.loggedIn) {
            this.props.history.push('/HomePage')
        }
        this.props.getUserData(res.data.userData.first_name, res.data.userData.last_name, res.data.userData.profile_pic, res.data.userData.email)
    }

    render() {
        const { classes } = this.props
        return (
            <div className='Signup-background'>

                <div className='registration-box'>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="first-name"
                            placeholder="First Name"
                            style={{ margin: 8 }}
                            className={TextField}
                            value={this.state.name}
                            margin="normal"
                        />
                        <TextField
                            id="last-name"
                            placeholder="Last Name"
                            style={{ margin: 8 }}
                            className={TextField}
                            value={this.state.name}
                            margin="normal"
                        />
                        <TextField
                            id="email-address"
                            placeholder="Your Email Address"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="password"
                            placeholder="Password"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <FormControl
                            style={{ margin: 8 }} autoComplete="off" >
                            <InputLabel htmlFor="age-simple">Birth Month</InputLabel>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem >January</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="birth-day"
                            placeholder="Day"
                            style={{ marginRight: 80, marginTop: 24, width: 70 }}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="birth-year"
                            placeholder="year"
                            style={{ marginLeft: -70, marginTop: 24, width: 70, marginRight: 8 }}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </form>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Signup);

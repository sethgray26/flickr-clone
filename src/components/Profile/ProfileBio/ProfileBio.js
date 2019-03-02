import React, { Component } from 'react'
import './ProfileBio.scss'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit'

const styles = theme => ({
    TextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
})


export default class ProfileBio extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            bio: '',
            bioUpdate: ''
        }
    }

    componentDidMount() {
        this.getBio()
    }

    getBio = () => {
        axios.get(`/api/bio`).then(res => {
            this.setState({ bio: res.data[0].user_bio })
        })
    }

    updateBio = () => {
        axios.put(`/api/bio`, { updateBio: this.state.bioUpdate }).then(res => {
            this.setState({ bio: res.data })
        })
    }

    handleUpdate(updateText) {
        this.setState({ bioUpdate: updateText })
    }

    clearInput(e) {
        e.preventDefault();
        e.target.reset();
    }

    onUpdateBioClick() {
        document.getElementById('textInput').className = 'show'
    }


    render() {
        console.log(this.state)
        return (
            <div id='profile-bio'>
                <form onSubmit={this.clearInput.bind(this)}>
                    <Fab color="secondary" aria-label="Edit">
                        <EditIcon onClick={() => this.updateBio()} />
                    </Fab>
                    {/* <button onClick={() => this.updateBio()}> Edit Bio Info </button> */}
                    <TextField
                        id="outlined-full-width"
                        label="Label"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => this.handleUpdate(e.target.value)}
                    />
                    {/* <textarea onChange={(e) => this.handleUpdate(e.target.value)}></textarea> */}

                </form>
                <h4>
                    {this.state.bio}
                </h4>
            </div >
        )
    }
}
import React, { Component } from 'react'
import './ProfileBio.scss'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit'





export default class ProfileBio extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            bio: '',
            bioUpdate: '',
            shown: true
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

    toggleShown() {
        this.setState({
            shown: !this.state.shown
        });
    }

    onClickStuffs() {
        this.toggleShown()
        this.updateBio()
    }


    render() {
        var shown = { display: this.state.shown ? "block" : "none" };
        var hidden = { display: this.state.shown ? "none" : "block" }

        return (
            <div id='profile-bio'>
                <form className='bio-holder'>
                    <div className='edit-bio-button'>
                        <Fab
                            style={shown}
                            color="secondary"
                            aria-label="Edit"
                            onClick={() => this.toggleShown()}
                        > <EditIcon />
                        </Fab>
                    </div>
                    <h4 className='bio-display-text' style={shown}>
                        {this.state.bio}
                    </h4>

                    <textarea
                        style={hidden}
                        className='bio-textBox'
                        maxLength='250'
                        onChange={(e) => this.handleUpdate(e.target.value)}
                    >
                    </textarea>

                    <div className='bio-save-button'>
                        <Button
                            style={hidden}
                            variant="contained"
                            color="primary"
                            onClick={() => this.onClickStuffs()}>Save Bio</Button>
                    </div>


                </form>

            </div >
        )
    }
}

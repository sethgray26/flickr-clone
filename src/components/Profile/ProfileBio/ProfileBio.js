import React, { Component } from 'react'
import axios from 'axios'


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



    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.clearInput.bind(this)}>
                    <button onClick={() => this.updateBio()}> Edit Bio Info </button>
                    <input onChange={(e) => this.handleUpdate(e.target.value)}  ></input>

                </form>
                <h4>
                    {this.state.bio}
                </h4>
            </div >
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'


export default class UserPictures extends Component {
    constructor(props, res) {
        super(props, res)
        this.state = {
            userPictures: []
        }
    }

    componentDidMount() {
        this.getUserImages()
    }

    getUserImages = () => {
        axios.get(`/api/userPictures`).then(res => {
            this.setState({ userPictures: res.data })
        })
    }

    deleteUserPicture(picture_id, err) {
        axios.delete(`/api/userPictures/${picture_id}`).then(res => {
            this.setState({ userPictures: res.data })
        })
    }


    render() {
        let displayUserImages = this.state.userPictures.map((image, index) => {
            const { picture_pic } = image
            const { picture_id } = image
            return (


                <div key={index} image={image}>
                    <img src={picture_pic} alt='' />

                    <button onClick={() => this.deleteUserPicture(picture_id)}> Delete </button>
                </div>
            )
        })
        return (
            <div>
                <p> Here are your accounts pictures</p>
                {displayUserImages}
            </div>
        )
    }

}
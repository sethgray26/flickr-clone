import React, { Component } from 'react'
// import Modal from '@material-ui/core/Modal';
import PictureModals from '../UserPictures.Modals/PictureModals'
import './UserPictures.scss'
import axios from 'axios'


export default class UserPictures extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userPictures: [],
            selectedImage: ''
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

    deleteUserPicture(picture_id) {
        axios.delete(`/api/userPictures/${picture_id}`).then(res => {
            this.setState({ userPictures: res.data })
        })
    }


    render() {
        let displayUserImages = this.state.userPictures.map((image, index) => {
            return (
                <PictureModals deleteUserPicture={() => this.deleteUserPicture(image.picture_id)} image={image} key={index} />
            )
        })

        return (
            <div className='profile-img-display'>
                {displayUserImages}
            </div>
        )
    }

}
import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import './PictureModals.scss'
// import axios from 'axios


export default class PictureModals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { image } = this.props
        const { picture_pic } = image
        const { picture_id } = image
        return (
            <div>
                <div>
                    <div className='profile-thumbnails'>
                        <img className="profile-thumbnails-img" onClick={() => this.handleOpen('open')} src={picture_pic} alt=''></img>
                    </div>

                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}>
                        <div className='modal-img-size'>
                            <button onClick={() => this.props.deleteUserPicture(picture_id)}> Delete </button>
                            <img className="media-gallery-main-img" src={picture_pic} alt='' />
                        </div>
                    </Modal>
                </div>
            </div >
        )
    }

}
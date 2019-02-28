import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import './PictureModals.scss'
// import axios from 'axios


export default class PictureModals extends Component {
    constructor() {
        super()
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
                <div className="media-gallery-thumbnails">
                    <img className="media-gallery-thumbnails-img" onClick={() => this.handleOpen('open')} src={picture_pic} alt=''></img>

                    <button onClick={() => this.deleteUserPicture(picture_id)}> Delete </button>
                    <Modal open={this.state.open} onClose={this.handleClose}>
                        <figure className='modal-img-size'>
                            {/* <button onClick={() => this.handleClose('open')}> X </button> */}
                            <img className='media-gallery-main-img' src={picture_pic} alt='' />
                        </figure>
                    </Modal>
                </div>
            </div >
        )
    }

}
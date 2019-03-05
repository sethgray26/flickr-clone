import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
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
            <>
                <div className='profile-thumbnails'>
                    <img className="profile-thumbnails-img" onClick={() => this.handleOpen('open')} src={picture_pic} alt=''></img>
                </div>

                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    disableAutoFocus={true}
                >
                    <div className='profile-modal-img-size'>
                        <img className="media-gallery-main-img" src={picture_pic} alt='' />
                        <Fab
                            color='primary'
                            style={{ marginLeft: -30 }}>
                            <IconButton color='secondary' className='modalDeleteButton' onClick={() => this.props.deleteUserPicture(picture_id)} >
                                <DeleteIcon />
                            </IconButton>
                        </Fab>
                    </div>
                </Modal>
            </>
        )
    }

}
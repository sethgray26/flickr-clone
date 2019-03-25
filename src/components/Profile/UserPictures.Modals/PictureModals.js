import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import './PictureModals.scss'


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

                    <img className="profile-thumbnails-img" onClick={() => this.handleOpen('open')} src={picture_pic} alt=''>
                    </img>
                </div>

                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    disableAutoFocus={true}
                >
                    <div className='modal-pop-holder'>
                        <Button
                            className='close-modal-btn'
                            variant='contained'
                            color='primary'
                            onClick={() => { this.handleClose('close') }}
                            placeholder='X'
                        >
                            Close
                        </Button>


                        <img className="modal-pop-img" src={picture_pic} alt='' />
                        <Button
                            className='modal-delete-btn'
                            variant="contained"
                            color="secondary"
                            onClick={() => this.props.deleteUserPicture(picture_id)}>
                            <DeleteIcon />
                            Delete
                              </Button>


                    </div>
                </Modal>
            </>
        )
    }

}
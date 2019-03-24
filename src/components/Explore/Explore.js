import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Navbar from '../Navbar/Navbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import './Explore.scss'


export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedImage: '',
            open: false,
            value: 1
        }
    }
    componentDidMount() {
        var _this = this;
        this.serverRequest = axios.get('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ca3783111609d69139840916b7a01ad2&format=json&nojsoncallback=1&per_page=28').then(function (result) {
            _this.setState({
                items: result.data.photos.photo,
                selectedImage: _this.imageURL(result.data.photos.photo[0])
            })
        })
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };



    imageURL(item) {
        return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
    }

    selectImage(selectedImage) {
        this.setState({
            selectedImage
        })
    }

    render() {
        const { selectedImage } = this.state;
        return (
            <div className='explore-page'>
                <Navbar />

                <div className='sub-nav'>
                    {/* All styling for sub nav / sub-nav-content and hover-blueBar are defined in the profile.scss file */}
                    <div className='sub-nav-content'>
                        <Tabs
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab id='hover-blueBar' label='Explore' href='/#/Explore' />

                            <Tab id='hover-blueBar' label='Trending' href='/#/Explore' />
                        </Tabs>

                    </div>
                </div>




                <div className="image-gallery-display">
                    <div className='title-explore'>
                        <h3> Explore </h3>
                    </div>

                    <div className="media-gallery-thumbnails" onClick={this.handleOpen}>

                        {this.state.items.length ? this.state.items.map((item, index) =>

                            <div key={index} onClick={this.selectImage.bind(this, this.imageURL(item))}>

                                <img className="media-gallery-thumbnails-img" src={this.imageURL(item)} alt='' />

                            </div>) : <div>Loading...</div>
                        }
                    </div>








                    <div>
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
                                <img className="modal-pop-img" src={selectedImage} alt='' />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
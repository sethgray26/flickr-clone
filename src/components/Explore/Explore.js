import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Navbar from '../Navbar/Navbar'
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
                <div className='explore-sub-nav'>
                    <div className='explore-sub-nav-content'>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            style={{ marginLeft: 60 }}
                        >
                            <Tab label='Explore' href='/#/Explore' />
                            <Tab className='trending-tab' label='Trending' href='/#/Explore' />
                        </Tabs>

                    </div>
                </div>

                <div className="media-gallery">
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
                            <div className='modal-img-size'>
                                <img className="media-gallery-main-img" src={selectedImage} alt='' />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
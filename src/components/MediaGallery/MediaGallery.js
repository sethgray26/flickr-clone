import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import axios from 'axios'
import './MediaGallery.scss'



export default class MediaGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedImage: '',
            open: false
        }
    }
    componentDidMount() {
        var _this = this;
        this.serverRequest =
            axios.get('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ca3783111609d69139840916b7a01ad2&format=json&nojsoncallback=1&per_page=30').then(function (result) {
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
            <div className="media-gallery">
                <div className="media-gallery-thumbnails" onClick={this.handleOpen}>
                    {this.state.items.length ?
                        this.state.items.map((item, index) =>
                            <div key={index}
                                onClick={this.selectImage.bind(this, this.imageURL(item))}>
                                <img className="media-gallery-thumbnails-img" src={this.imageURL(item)} alt='' />
                            </div>)
                        : <div>Loading...</div>
                    }
                </div>

                <div>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}>
                        <div className='modal-img-size'>
                            <img className="media-gallery-main-img" src={selectedImage} alt='' />
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import S3FileUpload from 'react-s3'
import './Upload.scss'
import axios from 'axios'


export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture_pic: '',
      imagePreviewUrl: '',
      image4Upload: '',
      picture_name: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImgUpload = this.handleImgUpload.bind(this);
  }


  handleImgUpload(e) {
    const { picture_name, picture_pic } = this.state
    axios.post(`/api/upload`, { uploadPicture: this.state.image4Upload, picture_name: picture_name, picture_pic: picture_pic }).then(res => {
      this.setState({ picture_pic: res.data })
    })
    e.preventDefault()
  }


  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let picture_pic = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        picture_pic: picture_pic,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(picture_pic)
  }

  render() {

    let { imagePreviewUrl } = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <form onSubmit={this.handleImgUpload}>
          <input type="file" onChange={this.handleImageChange} />
          <input onChange={(e) => this.setState({ picture_name: e.target.value })} />
          <button className='uploadImage' type="submit" onClick={this.handleImgUpload}>Upload Image</button>

        </form>
        {imagePreview}
      </div>
    )
  }
}
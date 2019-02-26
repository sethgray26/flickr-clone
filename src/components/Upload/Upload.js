// import React, { Component } from 'react'
// import axios from 'axios'


// export default class Upload extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       picture_pic: {},
//       imagePreviewUrl: '',
//       image4Upload: '',
//       picture_name: ''
//     };
//     this.handleImageChange = this.handleImageChange.bind(this);
//     this.handleImgUpload = this.handleImgUpload.bind(this);
//   }


//   handleImgUpload(e) {
//     const { picture_name, picture_pic } = this.state
//     axios.post(`/api/upload`, { uploadPicture: this.state.picture_pic, picture_name: picture_name, picture_pic: picture_pic }).then(res => {
//       this.setState({ picture_pic: res.data })
//       console.log(picture_pic)
//     })
//     e.preventDefault()
//   }


//   handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let picture_pic = e.target.files[0];
//     console.log(picture_pic)
//     reader.onloadend = () => {
//       this.setState({
//         picture_pic: picture_pic,
//         imagePreviewUrl: reader.result
//       });
//     }
//     reader.readAsDataURL(picture_pic)
//   }

//   render() {
//     let { imagePreviewUrl } = this.state;
//     let imagePreview = null;
//     if (imagePreviewUrl) {
//       imagePreview = (<img src={imagePreviewUrl} />);
//     }
//     return (
//       <div>
//         <form onSubmit={this.handleImgUpload}>
//           <input type="file" onChange={this.handleImageChange} />
//           <input onChange={(e) => this.setState({ picture_name: e.target.value })} />
//           <button className='uploadImage' type="submit" onClick={this.handleImgUpload}>Upload Image</button>

//         </form>
//         {imagePreview}
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';
// import axios from 'axios';

// class S3FileUpload extends Component {
//   constructor() {
//     super();
//     this.state = {
//       file: null,
//       imagePreviewUrl: '',
//       picture_pic: null,
//       picture_name: ''
//     };
//   }



//   submitFile = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('file', this.state.file[0]);
//     axios.post(`/api/s3-upload`, formData, {
//       headers: {
//         'Content-Type': 'multiparty/form-data'
//       }
//     }).then(res => {
//       console.log('hit')
// this.setState({ picture_pic: 'https://s3-us-west-1.amazonaws.com/sethgray26-s3/' + res.data.service.config.params.Key })
//     }).catch(error => {
//       // handle your error
//     });
//   }

//   handleFileUpload = (event) => {
//     this.setState({ file: event.target.files });
//   }


//   render() {
//     // let { imagePreviewUrl } = this.state;
//     // if (imagePreviewUrl) {
//     //   imagePreview = (<img src={imagePreviewUrl} />);
//     // }
//     console.log(this.state)
//     return (
//       <div>

//         <form onSubmit={this.submitFile}>
//           <input label='upload file' type='file' onChange={this.handleFileUpload} />
//           <button type='submit'>Send</button>
//         </form>
//         <img src={this.state.picture_pic} alt=' :)' />
//       </div>
//     );
//   }
// }

// export default S3FileUpload;



import React, { Component } from 'react';
import axios from 'axios';

export default class Upload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      this.setState({ picture_pic: 'https://s3-us-west-1.amazonaws.com/sethgray26-s3/' + res.data.service.config.params.Key })

    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  }

  render() {
    return (
      <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

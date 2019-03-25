import React, { Component } from 'react';
import './Upload.scss';
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';
import Navbar from '../../components/Navbar/Navbar'

class Upload extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      // url: 'http://via.placeholder.com/450x450',
      picture_name: '',
      picture_description: ''
    };
  }

  onDrop = ([file]) => {
    this.setState({ isUploading: true });
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios.get('/api/upload', {
      params: { 'file-name': fileName, 'file-type': file.type, },
    }).then(response => {
      const { signedRequest, url } = response.data;
      this.uploadFile(file, signedRequest, url);
    }).catch(err => {
      console.log(err);
    });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };
    axios.put(signedRequest, file, options).then(response => {
      this.setState({ isUploading: false, url });
      const { picture_name } = this.state
      const { picture_description } = this.state
      axios.post(`/api/upload`, { url, picture_name, picture_description })
    })
  };

  handleName(newName) {
    this.setState({ picture_name: newName })
  }

  handleDescript(newDescript) {
    this.setState({ picture_description: newDescript })
  }

  render() {
    const { url, isUploading } = this.state;
    return (
      <div className='upload-page'>
        <div className='semi-circle'>
          <div className='upload-page-holder'>
            <Navbar />

            <div className='upload-header'>
              <h1>Upload Your Masterpiece!</h1>
            </div>

            <div className="upload-photo-info">
              <div className='info-left'>


                <textarea
                  placeholder='Picture Name'
                  className="upload-picture-name"
                  label="Picture Name"
                  margin="normal"
                  variant="outlined"
                  maxLength='50'
                  onChange={(e) => { this.handleName(e.target.value) }}
                />

                <textarea
                  placeholder='Picture Description'
                  className="upload-picture-descript"
                  label="Picture Description"
                  margin="normal"
                  variant="outlined"
                  maxLength='50'
                  onChange={(e) => { this.handleDescript(e.target.value) }}
                />

                <Dropzone
                  className='upload-dropzone'
                  onDropAccepted={this.onDrop}
                  accept="image/*"
                  multiple={false}
                >
                  {() => {
                    return (
                      <div>
                        {isUploading ? <GridLoader /> : <p>Drop File or Click Here</p>}
                      </div>
                    )
                  }}
                </Dropzone>
              </div>
              <div className='uploaded-img'>
                <img src={url} alt="" />
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
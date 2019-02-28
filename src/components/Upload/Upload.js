import React, { Component } from 'react';
import './Upload.css';
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';
import Navbar from '../../components/Navbar/Navbar'

class Upload extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      url: 'http://via.placeholder.com/450x450',
      picture_name: ''
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
      axios.post(`/api/upload`, { url, picture_name })

    })
  };

  handleName(newName) {
    this.setState({ picture_name: newName })
  }

  render() {
    const { url, isUploading } = this.state;
    return (
      <div>

        <Navbar />
        <div className="Upload">
          <h1>Upload</h1>
          <h1>{url}</h1>
          <img src={url} alt="" width="450px" />

          <Dropzone
            onDropAccepted={this.onDrop}
            style={{
              position: 'relative',
              width: 200,
              height: 200,
              borderWidth: 7,
              marginTop: 100,
              borderColor: 'rgb(102, 102, 102)',
              borderStyle: 'dashed',
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 28,
            }}
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
          <input onChange={(e) => { this.handleName(e.target.value) }} />
        </div>
      </div>
    );
  }
}

export default Upload;

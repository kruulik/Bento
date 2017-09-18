import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imageUrl: this.props.imageUrl,
      filePreviewUrl: this.props.imageUrl,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleClick() {
    console.log('clicked');
  }



  render() {
    debugger
    // get project from props, this image to project's items list...
    return (
      <div>

      </div>
    );
  }
}

export default ImageForm;

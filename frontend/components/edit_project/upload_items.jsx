import React from 'react';
import ReactQuill from 'react-quill';
import ProjectWrapContainer from '../project/project_wrap_container';


class UploadItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      linkUrl: '',
      file: null,
      filePreviewUrl: null,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(action) {
    console.log(action);

  }

  render() {
    const {project} = this.props;

    let content;
    switch (this.props.section) {
      case "sidebar":
        content = <div className="sidebar">
          <h2>ADD MEDIA</h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              {<div onClick={() => {this.handleClick('image');}}>Upload Files</div>}
            </li>
            <li className="sidebar-item">
              <div onClick={() => {this.handleClick('text');}}>Add Text</div>
            </li>
            <li className="sidebar-item">
              <div onClick={() => {this.handleClick('embed');}}>Embed Media</div>
            </li>
          </ul>
          <h2>EDIT DESIGN</h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <div onClick={() => {this.handleClick('styles');}}>Edit Styles & Layout</div>
            </li>
          </ul>
        </div>;
        break;
      case "module":
        content =
        <div className="place-holder-module">
          <div className="content">
            <div className="title">Start building your project:</div>
            <div className="icons">

              <div className="icon-wrap">
                <div className="icon-svg image" onClick={() => {this.handleClick('image');}}></div>;
                <div className="label">Files</div>
              </div>

              <div className="icon-wrap">
                <div className="icon-svg text" onClick={() => {this.handleClick('text');}}></div>;
                <div className="label">Text</div>
              </div>

              <div className="icon-wrap">
                <div className="icon-svg embed" onClick={() => {this.handleClick('embed');}}></div>;
                <div className="label">Embed</div>
              </div>

            </div>
          </div>
        </div>;
        break;
      case "insert":
        content =
        <div className="module-separator">
          <div className="button-popup-container">
            <span>Insert Media:</span>
            <div className="insert-content-buttons">
              {imgButton}
              {txtButton}
              {embButton}
            </div>
          </div>
        </div>;
        break;
    }

    return (<div>{content}</div>);
  }
}

export default UploadItems;

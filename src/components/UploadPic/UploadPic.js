import React, { Component } from "react";
import firebaseinit from "../../firebaseinit";
import FileUploader from "react-firebase-file-uploader";
import { updatePhotoURL } from "../../ducks/userReducer";
import { connect } from "react-redux";

class UploadPic extends Component {
  state = {
    // username: "",
    avatar: "",
    // isUploading: false,
    // progress: 0,
    avatarURL: ""
    // photoURL:
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({
      avatar: filename
      // , progress: 100, isUploading: false
    });
    firebaseinit
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }))
      .then(() => this.props.updatePhotoURL(this.state.avatarURL));
  };

  render() {
    return (
      <div>
        <form>
          <label>Image: </label>
          {this.state.isUploading && <p>{this.state.progress}</p>}
          {this.state.avatarURL && (
            <img src={this.state.avatarURL} alt="avatar" />
          )}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebaseinit.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            multiple={"multiple"}
          />
        </form>
      </div>
    );
  }
}

const mapStatetoProps = state => state;

export default connect(
  mapStatetoProps,
  { updatePhotoURL }
)(UploadPic);

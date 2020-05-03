import React, { Component } from "react";
// import s from "./ProfileInfo.module.css";
// import Preloader from "components/common/Preloader";

class ProfileStatus extends Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus
              onBlur={this.deActivateEditMode}
              value={this.props.status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;

import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "store/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profileApi } from "api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileApi.getUserProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = {
  setUserProfile,
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);

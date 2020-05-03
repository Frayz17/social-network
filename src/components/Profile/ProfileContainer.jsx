import React from "react";
import Profile from "./Profile";
import { setUserProfile, getUserProfile } from "store/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WithAuthRedirect from "hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
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
  getUserProfile,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);

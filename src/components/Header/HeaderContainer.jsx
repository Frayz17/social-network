import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getMyAccountInfo } from "store/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMyAccountInfo();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = {
  setAuthUserData,
  getMyAccountInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authApi } from "api/api";
import { setAuthUserData } from "store/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    authApi.getMyAcountInfo().then((data) => {
      if (data.resultCode === 0) {
        const userData = data.data;
        this.props.setAuthUserData(userData);
      }
    });
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

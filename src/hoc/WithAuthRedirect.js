import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Redirect to={"/login"} />;
    }

    return <Component {...props} />;
  };

  const mapStateToPropsRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  return connect(mapStateToPropsRedirect)(RedirectComponent);
};

export default withAuthRedirect;

import React from "react";
import Users from "./Users";
import Preloader from "components/common/Preloader";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsers,
  followUser,
  unFollowUser,
} from "store/usersReducer";
import WithAuthRedirect from "hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            followingInProgress={this.props.followingInProgress}
            getUsers={this.props.getUsers}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
  getUsers,
  followUser,
  unFollowUser,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithAuthRedirect
)(UsersContainer);

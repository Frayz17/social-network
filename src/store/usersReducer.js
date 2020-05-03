import { usersApi, followApi } from "api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.payload };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.payload };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
      };

    default:
      return state;
  }
};

export const follow = (userid) => {
  return { type: FOLLOW, payload: userid };
};

export const unFollow = (userid) => {
  return { type: UNFOLLOW, payload: userid };
};

export const setUsers = (users) => {
  return { type: SET_USERS, payload: users };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount };
};

export const setCurrentPage = (pageNumber) => {
  return { type: SET_CURRENT_PAGE, payload: pageNumber };
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, payload: isFetching };
};

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: { isFetching, userId },
  };
};

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  usersApi.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const followUser = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  followApi.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export const unFollowUser = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  followApi.unFollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unFollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export default usersReducer;

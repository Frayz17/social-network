const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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

export default usersReducer;

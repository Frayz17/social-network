const SET_USER_DATA = "SENSET_USER_DATAD_MESSAGE";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  //  isFrtching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = ({ id, email, login }) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId: id,
      email,
      login,
    },
  };
};

export default authReducer;

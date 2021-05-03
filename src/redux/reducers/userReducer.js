import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR,
  TRY_SIGNIN,
  TRY_SIGNIN_FAILED,
} from "../actions/types";

const initialState = {
  error: "",
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return { ...state, user: null, isAuthenticated: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload };
    case TRY_SIGNIN:
      return { ...state, ...action.payload, isLoading: false };
    case TRY_SIGNIN_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;

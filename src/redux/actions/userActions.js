import axios from "axios";
import { LOGIN_USER, LOGOUT_USER } from "./types";
import history from "../../history"
import SERVER from '../serverUrl'

export const login = (user) => {
  return (dispatch) => {
    return axios.post(`${SERVER}/api/login`, user).then(({ data }) => {
      dispatch({ type: LOGIN_USER, payload: data });
      history.push("/");
    });
  };
};

export const register = (user) => {
  return (dispatch) => {
    return axios
      .post(`${SERVER}/api/register`, user)
      .then(({ data }) => dispatch({ type: "REGISTER", payload: data }));
  };
};

export const logout = () => {
  return (dispatch) => {
    return axios.get(`${SERVER}/api/logout`).then(({ data }) => {
      dispatch({ type: LOGOUT_USER, payload: data });
    });
  };
};

export const isAuthenticated = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER}/api/authenticated`)
      .then(({ data }) => {
        dispatch({ type: "TRY_SIGNIN", payload: data });
      })
      .catch(() => {
        dispatch({ type: "TRY_SIGNIN_FAILED" });
      });
  };
};

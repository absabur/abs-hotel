import axios from "axios";
import {
  AUTHENTICATED,
  CLEAR_MESSAGE,
  ERROR,
  LOADING_TRUE,
  LOAIDNG_FALSE,
  LOGOUT,
  REGISTER_LOGIN,
} from "../Constance";

const API_KEY = "AIzaSyALYT9xiqtgNHuQzV0doPisp_zqG0tP1fc";

export const register = (email, password) => (dispatch) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  dispatch(loadingTrue());
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
      data
    )
    .then((res) => {
      dispatch(registerAction(res.data, "Registration successful"));
      dispatch(loadingFalse());
    })
    .catch((err) => {
      dispatch(errorAction(err.response.data.error.message));
      dispatch(loadingFalse());
    });
};
export const login = (email, password) => (dispatch) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  dispatch(loadingTrue());
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        API_KEY,
      data
    )
    .then((res) => {
      dispatch(registerAction(res.data, "Login successful"));
      dispatch(loadingFalse());
    })
    .catch((err) => {
      dispatch(errorAction(err.response.data.error.message));
      dispatch(loadingFalse());
    });
};

export const registerAction = (data, message) => {
  localStorage.setItem("abs-motel-token", data.idToken);
  localStorage.setItem("abs-motel-userId", data.localId);
  localStorage.setItem(
    "abs-motel-expires",
    JSON.stringify(new Date().getTime() + parseInt(data.expiresIn) * 1000)
  );
  return {
    type: REGISTER_LOGIN,
    payload: {
      token: data.idToken,
      userId: data.localId,
      expired: data.expiresIn,
      success: message,
    },
  };
};

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("abs-motel-token");
  if (!token) {
    dispatch(logout());
  } else {
    const expires = JSON.parse(localStorage.getItem("abs-motel-expires"));
    if (new Date(expires) <= new Date()) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("abs-motel-userId");
      dispatch(isauthenticated(token, userId));
    }
  }
};

export const isauthenticated = (token, userId) => {
  return {
    type: AUTHENTICATED,
    payload: {
      token: token,
      userId: userId,
    },
  };
};

export const errorAction = (error) => {
  return {
    type: ERROR,
    payload: {
      error: error,
    },
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};

export const logout = () => {
  localStorage.removeItem("abs-motel-token");
  localStorage.removeItem("abs-motel-userId");
  localStorage.removeItem("abs-motel-expires");
  return {
    type: LOGOUT,
  };
};
export const loadingTrue = () => {
  return {
    type: LOADING_TRUE,
  };
};
export const loadingFalse = () => {
  return {
    type: LOAIDNG_FALSE,
  };
};

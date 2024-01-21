import axios from "axios";
import { SHOW_ROOMS } from "../Constance";
import { errorAction, loadingFalse, loadingTrue } from "./authAction";

export const getRoomData = () => (dispatch) => {
  dispatch(loadingTrue());
  axios
    .get("https://abs-hotel-default-rtdb.firebaseio.com/roomdata.json")
    .then((res) => {
      dispatch(getRooms(res.data));
      dispatch(loadingFalse());
    });
};

export const contact = (name, email, message) => (dispatch) => {
  dispatch(loadingTrue());
  let data = {
    name: name,
    email: email,
    message: message,
  }
  axios
    .post("https://abs-hotel-default-rtdb.firebaseio.com/contactmessage.json", data)
    .then((res) => {
      dispatch(successMessage("Thanks for contacting us!"));
      dispatch(loadingFalse());
    })
    .catch((err) => {
      dispatch(errorAction(err.response.data.error.message));
      dispatch(loadingFalse());
    });
};

export const successMessage = (message) => {
  return {
    type: "MESSAGE",
    payload: message,
  };
};
export const getRooms = (data) => {
  let rooms = {};
  for (let key in data) {
    rooms = { ...data[key] };
  }
  return {
    type: SHOW_ROOMS,
    payload: rooms,
  };
};


export const postRoomData = (data) => (dispatch) => {
  let token = localStorage.getItem("abs-motel-token");
  axios
    .post("https://abs-hotel-default-rtdb.firebaseio.com/roomdata.json?auth="+token, data)
    .then((res) => {
      dispatch(successMessage("New Data Added"));
    });
};
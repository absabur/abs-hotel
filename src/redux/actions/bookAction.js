import axios from "axios";
import {
  AVAILBLE_ROOM,
  BOOKING_DATA_GET,
  BOOKING_FAILS,
  BOOKING_SUCCESS,
  CLEAR_BOOKING_MESSAGE,
} from "../Constance";
import { loadingFalse, loadingTrue } from "./authAction";

export const roomBook = (booking_data, details, amount) => (dispatch) => {
  let data = null;
  let userId = localStorage.getItem("abs-motel-userId");
  data = {
    name: booking_data.name,
    email: booking_data.email,
    phone: booking_data.phone,
    start_date: booking_data.start_date,
    end_date: booking_data.end_date,
    amount: amount,
    category: details.category,
    room: details.room,
    image: details.image,
    userId: userId,
    booked_on: new Date(),
  };
  let token = localStorage.getItem("abs-motel-token");
  dispatch(loadingTrue());
  axios
    .post(
      "https://abs-hotel-default-rtdb.firebaseio.com/booking.json?auth=" +
        token,
      data
    )
    .then((response) => {
      dispatch(booked("Room is booked successfully"));
      dispatch(loadingFalse());
    })
    .catch((error) => {
      dispatch(setError("Unable to book the room. Try again."));
      dispatch(loadingFalse());
    });

  axios.post(
    "https://abs-hotel-default-rtdb.firebaseio.com/roomcount.json",
    data
  );
};

export const getBookData = () => (dispatch) => {
  dispatch(loadingTrue());
  axios
    .get("https://abs-hotel-default-rtdb.firebaseio.com/roomcount.json")
    .then((res) => {
      dispatch(getBookingAll(res.data));
      dispatch(loadingFalse());
    });
};

export const getBookingAll = (data) => {
  return {
    type: BOOKING_DATA_GET,
    paylaad: data,
  };
};

export const avilableRoom = () => async (dispatch) => {
  // dispatch(loadingTrue());
  let bookData = await axios.get(
    "https://abs-hotel-default-rtdb.firebaseio.com/roomcount.json"
  );
  let roomData = await axios.get(
    "https://abs-hotel-default-rtdb.firebaseio.com/roomdata.json"
  );
  // dispatch(loadingFalse())
  bookData = bookData.data;
  roomData = roomData.data;
  dispatch(updateRoom(bookData, roomData));
};

const updateRoom = (bookData, roomData) => {
  let rooms = {};
  for (let key in roomData) {
    rooms = { ...roomData[key] };
  }
  let data = [];
  for (let key in bookData) {
    if (new Date(bookData[key].end_date) > new Date()) {
      data.push({ ...bookData[key], id: key });
    }
  }

  let newData = rooms.categories.map((categroy) => {
    data.map((cate) => {
      if (categroy.type === cate.category) {
        categroy.rooms.map((room, index) => {
          if (room.type === cate.room) {
            categroy.number_of_rooms[index] =
              categroy.number_of_rooms[index] - 1;
            return room;
          }
        });
      }
    });
    return categroy;
  });
  return {
    type: AVAILBLE_ROOM,
    payload: newData,
  };
};

export const booked = (message) => {
  return {
    type: BOOKING_SUCCESS,
    payload: {
      success: message,
    },
  };
};

export const getBooking = () => (dispatch) => {
  const userId = localStorage.getItem("abs-motel-userId");
  const token = localStorage.getItem("abs-motel-token");
  axios
    .get(
      "https://abs-hotel-default-rtdb.firebaseio.com/booking.json?auth=" +
        token +
        '&orderBy="userId"&equalTo="' +
        userId +
        '"'
    )
    .then((response) => {
      dispatch(setBooking(response.data));
    })
    .catch((error) => {
      dispatch(setError(error.response.data));
    });
};

export const setBooking = (response) => {
  return {
    type: BOOKING_DATA_GET,
    payload: response,
  };
};
export const setError = (err) => {
  return {
    type: BOOKING_FAILS,
    payload: {
      error: err,
    },
  };
};
export const clear_booking_message = () => {
  return {
    type: CLEAR_BOOKING_MESSAGE,
  };
};

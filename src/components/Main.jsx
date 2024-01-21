import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Rooms from "./Body/Rooms";
import Register from "./Body/Register";
import LoadingPage from "./loading/LoadingPage";
import Login from "./Body/Login";
import { Navigate, Route, Routes } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authCheck, clearMessage } from "../redux/actions/authAction";
import Profile from "./Body/Profile";
import {
  avilableRoom,
  clear_booking_message,
} from "../redux/actions/bookAction";
import { getRoomData } from "../redux/actions/roomActions";
import About from "./Body/About";
import Contact from "./Body/Contact";

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestRoomData: () => dispatch(getRoomData()),
    avilableRoom: () => dispatch(avilableRoom()),
    authCheck: () => dispatch(authCheck()),
    clearMessage: () => dispatch(clearMessage()),
    clear_booking_message: () => dispatch(clear_booking_message()),
  };
};
const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    isLoading: state.authReducer.isLoading,
    userId: state.authReducer.userId,
    success: state.authReducer.success,
    error: state.authReducer.error,
    booking_data: state.bookReducer.booking_data,
    book_success: state.bookReducer.success,
    book_error: state.bookReducer.error,
  };
};

const Main = (props) => {
  const [render, setrender] = useState(false);
  useEffect(() => {
    props.authCheck();
    props.getLatestRoomData();
    props.avilableRoom();
    setInterval(() => {
      props.avilableRoom();
    }, 60000);
    setrender(true);
  }, []);

  useEffect(() => {
    if (props.success) {
      toast.success(props.success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      props.clearMessage();
    }
    if (props.error) {
      toast.error(props.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      props.clearMessage();
    }
    if (props.book_success) {
      toast(props.book_success);
      props.clear_booking_message();
    }
    if (props.book_error) {
      toast(props.book_error);
      props.clear_booking_message();
    }
  }, [props]);
  return (
    <div className="container mt-2 mb-2">
      <ToastContainer />
      {props.isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {render && (
            <Routes>
              <Route
                path="/"
                element={<Rooms categories={props.rooms.categories} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {props.userId && <Route path="/profile" element={<Profile />} />}
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          )}
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

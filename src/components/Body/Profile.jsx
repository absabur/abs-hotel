import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBooking } from "../../redux/actions/bookAction";
import date from "date-and-time";
import "./Profile.css";
import { loadingFalse, loadingTrue } from "../../redux/actions/authAction";
import Private from "../Private";

const mapDispatchToProps = (dispatch) => {
  return {
    getBooking: () => dispatch(getBooking()),
    loadingTrue: () => dispatch(loadingTrue()),
    loadingFalse: () => dispatch(loadingFalse()),
  };
};
const mapStateToProps = (state) => {
  return {
    myBookings: state.bookReducer.booking_data,
    userId: state.authReducer.userId,
  };
};
const Profile = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    props.getBooking();
  }, []);
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  

  const formateTime = (time, sec = false) => {
    if (sec) {
      return date.format(new Date(time), "hh:mm:ss A, ddd, MMM DD");
    } else {
      return date.format(new Date(time), "ddd, MMM DD YYYY, hh:mm A");
    }
  };
  const timeLeft = (time) => {
    let day = Math.floor(time / 1000 / 3600 / 24);
    let hour = Math.floor((time / 1000 - day * 24 * 3600) / 3600);
    let minute = Math.floor((time / 1000 - hour * 3600 - day * 24 * 3600) / 60);
    return day + "d, " + hour + "h, " + minute + "m";
  };
  return (
    <div style={{ width: "100%" }}>
      {props.userId === "E4PevM5vOqdiYNIIiRq3qKvEm5u2" && <Private />}
      <h4
        style={{
          textAlign: "center",
          background: "rgba(100, 140, 0, 1)",
          padding: "10px",
          color: "white",
        }}
      >
        Time: {formateTime(currentTime, true)}
      </h4>
      <h2
        style={{ textAlign: "center", textDecoration: "underline" }}
        className="mb-4 pb-4"
      >
        My Bookings
      </h2>
      {props.myBookings.length>0 ? (
        props.myBookings.map((booking) => (
          <div className="book-card" key={booking.id}>
            <div className="book-card-image">
              {new Date(booking.end_date) <= new Date() ? (
                <p className="expired">Expired</p>
              ) : (
                <p className="time-left">
                  Time Left: {timeLeft(new Date(booking.end_date) - new Date())}
                </p>
              )}
              <img
                style={{
                  opacity: new Date(booking.end_date) <= new Date() ? 0.5 : 1,
                }}
                src={booking.image}
                alt="room"
              />
            </div>
            <div
              className="book-card-body"
              style={{
                opacity: new Date(booking.end_date) <= new Date() ? 0.5 : 1,
              }}
            >
              <h5>
                Room Type: {booking.category}, {booking.room}
              </h5>
              <div>
                <p>Owner Info: </p>
                <p className="para visibility">
                  Name: {booking.name}, <br />
                  Phone: {booking.phone}, <br />
                  {booking.email && `Email: ${booking.email}`}
                </p>
              </div>
              <div>
                <p>Duration: </p>
                <p className="para">
                  from:-
                  {formateTime(booking.start_date)}
                  <br />
                  To:-
                  {formateTime(booking.end_date)}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{height: "400px", display:"flex", width:"100%",alignItems: "center", justifyContent: "center"}}>
          <h2>You don't have any booking.</h2>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

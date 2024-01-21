import React, { useState } from "react";
import "./Body.css";
import Features from "./Features";
import { Modal } from "reactstrap";
import RoomBook from "./RoomBook";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorAction } from "../../redux/actions/authAction";
const mapDispatchToProps = (dispatch) => {
  return {
    errorAction: (error) => dispatch(errorAction(error)),
  };
};
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};

const Rooms = (props) => {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const bookDetails = (details) => {
    if (props.userId === null) {
      props.errorAction("You must login first");
      navigate("/login");
    }
    setModal((modal) => !modal);
    setDetails(details);
  };
  return (
    <div>
      <div style={{ width: "100%", position: "relative" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            marginBottom: "2rem",
          }}
          src="https://english.onlinekhabar.com/wp-content/uploads/2017/09/hyatt-regency-kathmandu.jpeg"
          alt=""
        />
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            width:"max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          <h1 style={{color: "white"}}>Welcome To ABS Hotel</h1>
          <h4 style={{color: "white"}}>Explore Our Room</h4>
          <a href="#rooms" className="btn btn-info">
            Rooms
          </a>
        </div>
      </div>
      <h2
        style={{ textAlign: "center", textDecoration: "underline" }}
        className="mb-4"
        id="rooms"
      >
        Find A Room
      </h2>
      {props.categories &&
        props.categories.map((category, index) => {
          return (
            <div key={index} className="category">
              <h2>Packege: {category.type}</h2>
              <div className="rooms">
                {category.rooms.map((room, index) => {
                  return (
                    <div key={index} className="room-card">
                      <div className="image">
                        <div className="book-now">
                          <button
                            onClick={() =>
                              bookDetails({
                                available: category.number_of_rooms[index],
                                category: category.type,
                                room: room.type,
                                price: Math.floor(
                                  category.base_price * room.price
                                ),
                                image: category.room_images[index],
                              })
                            }
                            className="btn btn-info"
                          >
                            Book Now
                          </button>
                        </div>
                        <img src={category.room_images[index]} alt="na" />
                      </div>
                      <div className="card-body">
                        <p style={{ fontWeight: "600", textAlign: "center" }}>
                          Room Type: {room.type}
                        </p>
                        <div className="room-info">
                          <span>
                            Area: {room.size} m<sup>2</sup>
                          </span>
                          <span>Person: {room.person}</span>
                          <span>Bed: {room.bed}</span>
                        </div>
                        <Features features={category.features} />
                        <div className="bottom-info">
                          <p
                            style={{
                              color:
                                category.number_of_rooms[index] === 0
                                  ? "red"
                                  : "green",
                            }}
                          >
                            Available: {category.number_of_rooms[index]}
                          </p>
                          <p>|</p>
                          <p>
                            Fee: {Math.floor(category.base_price * room.price)}{" "}
                            BDT
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      <Modal isOpen={modal}>
        <button onClick={() => setModal(false)} className="btn btn-danger">
          Close
        </button>
        {details.available === 0 ? (
          <div className="p-2 d-flex flex-column align-items-center justify-content-center">
            <p style={{ textAlign: "center" }}>
              <b>No room available for</b> <br /> Category: {details.category},{" "}
              <br />
              Type: {details.room}
            </p>
            <p>Try something else.</p>
          </div>
        ) : (
          <RoomBook details={details} />
        )}
        <button onClick={() => setModal(false)} className="btn btn-danger">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);

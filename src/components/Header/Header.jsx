import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import { logout } from "../../redux/actions/authAction";
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};

const Header = (props) => {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  return (
    <div className="header">
      <div className="container inner-header">
        <a href="/">ABS-Hotel</a>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {props.userId ? (
            <>
              {location.pathname === "/profile" ? (
                <p
                  className="logout btn btn-danger"
                  onClick={() => setModal(true)}
                >
                  Logout
                </p>
              ) : (
                <Link to="/profile">Profile</Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
      <Modal isOpen={modal}>
        <button className="btn btn-info" onClick={() => setModal(false)}>
          Close
        </button>
        <h2 className="m-auto p-4">Are you sure to logout?</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}
        >
          <button
            className="btn btn-danger"
            onClick={() => {
              props.logout();
              setModal(false);
            }}
          >
            Log Out
          </button>
          <button className="btn btn-info" onClick={() => setModal(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

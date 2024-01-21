import { ErrorMessage, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { avilableRoom, roomBook } from "../../redux/actions/bookAction";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    roomBook: (values, details, amount) =>
      dispatch(roomBook(values, details, amount)),
    avilableRoom: () => dispatch(avilableRoom()),
  };
};
const mapStateToProps = (state) => {
  return {
    success: state.bookReducer.success,
  };
};

const RoomBook = ({ details, roomBook, success, avilableRoom }) => {
  const [totalFee, setTotalFee] = useState(0);
  const [day, setDay] = useState(1);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    setTotalFee(details.price);
    setDiscount(0);
    if (Math.ceil(day) > 1) {
      setDiscount(10);
      setTotalFee(
        details.price * Math.ceil(day) -
          (details.price * Math.ceil(day) * 10) / 100
      );
    }
  }, [details, day]);

  useEffect(() => {
    if (success) {
      avilableRoom();
    }
  }, [success]);

  return (
    <div>
      {success && <Navigate replace to="/profile" />}
      <Formik
        onSubmit={(values) => roomBook(values, details, totalFee)}
        initialValues={{
          email: "",
          name: "",
          phone: "",
          start_date: "",
          end_date: "",
          method: "",
          transaction: "",
        }}
        validate={(values) => {
          const errors = {};
          setDay(
            (new Date(values.end_date).getTime() -
              new Date(values.start_date).getTime()) /
              (1000 * 60 * 60 * 24)
          );

          if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length < 3) {
            errors.name = "Name must be at least 3 characters";
          }

          if (!values.phone) {
            errors.phone = "Required";
          } else if (values.phone.length < 3) {
            errors.phone = "Phone must be at least 11 characters";
          } else if (isNaN(values.phone)) {
            errors.phone = "Enter a valid phone number";
          }

          if (!values.start_date) {
            errors.start_date = "Required";
          } else if (new Date(values.start_date) <= new Date()) {
            errors.start_date = "Date Must be gretter than today.";
          }

          if (!values.end_date) {
            errors.end_date = "Required";
          } else if (new Date(values.end_date) <= new Date(values.start_date)) {
            errors.end_date = "Date Must be gretter than Start date.";
          }

          if (!values.method) {
            errors.method = "Required";
          }

          if (!values.transaction) {
            errors.transaction = "Required";
          }

          return errors;
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <div className="p-4" style={{ boxShadow: "0 0 5px black" }}>
            <form onSubmit={handleSubmit}>
              <label>Name: </label>{" "}
              <ErrorMessage name="name" component="span" />
              <input
                onChange={handleChange}
                value={values.name}
                className="form-control mb-4"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              <label>Mobile: </label>{" "}
              <ErrorMessage name="phone" component="span" />
              <input
                onChange={handleChange}
                value={values.phone}
                className="form-control mb-4"
                type="text"
                name="phone"
                placeholder="Enter Your Mobile Number"
              />
              <label>Email: </label>{" "}
              <ErrorMessage name="email" component="span" />
              <input
                onChange={handleChange}
                value={values.email}
                className="form-control mb-4"
                type="text"
                name="email"
                placeholder="Enter Your Email"
              />
              <label>Start Date: </label>{" "}
              <ErrorMessage name="start_date" component="span" />
              <Field
                onChange={handleChange}
                value={values.start_date}
                className="form-control mb-4"
                type="datetime-local"
                name="start_date"
              />
              <label>End Date: </label>{" "}
              <ErrorMessage name="end_date" component="span" />
              <Field
                onChange={handleChange}
                value={values.end_date}
                className="form-control mb-4"
                type="datetime-local"
                name="end_date"
              />{" "}
              <h2>
                Total Fee: {totalFee},{" "}
                <b style={{ color: "rgba(100, 140, 0, 0.5)" }}>-{discount}%</b>
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                }}
              >
                <p
                  style={{ textAlign: "center", color: "rgba(100, 140, 0, 1)" }}
                >
                  Payment Number: <b>01521710796</b>
                </p>
                <p
                  style={{ textAlign: "center", color: "rgba(100, 140, 0, 1)" }}
                >
                  Send Money to this number and enter the transaction number.
                </p>
              </div>
              <label>Payment Method: </label>{" "}
              <ErrorMessage name="method" component="span" />
              <select
                onChange={handleChange}
                value={values.method}
                className="form-control mb-4"
                name="method"
              >
                <option value="">Choose Payment Method</option>
                <option value="bkash">Bkash</option>
                <option value="rocket">Rocket</option>
                <option value="nagad">Nagad</option>
              </select>
              <label>Payment Transaction: </label>{" "}
              <ErrorMessage name="transaction" component="span" />
              <Field
                onChange={handleChange}
                value={values.transaction}
                className="form-control mb-4"
                type="text"
                name="transaction"
                placeholder="Enter Transaction no."
              />
              <button
                style={{ width: "100%" }}
                className="btn btn-success"
                type="submit"
              >
                Book Now
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomBook);

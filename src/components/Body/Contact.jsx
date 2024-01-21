import React, { useState } from "react";
import "./Contact.css";
import { connect } from "react-redux";
import { contact } from "../../redux/actions/roomActions";
const mapDispatchToProps = dispatch => {
    return {
        contact: (name, email, message) => dispatch(contact(name, email, message)),
    };
}

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="header-ac">
        <h1>Contact ABS-Hotel</h1>
        <p>We're here to assist you. Reach out to us!</p>
      </div>

      <div className="section">
        <h2 className="section-title">Contact Form</h2>
        <p className="section-content">
          Use the form below to send us a message, and we'll get back to you as
          soon as possible.
        </p>

        <form onSubmit={()=> props.contact(name, email, message)} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps) (Contact);

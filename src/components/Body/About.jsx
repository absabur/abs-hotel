import React from "react";
import './About.css'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="header-ac">
        <h1>Welcome to ABS-Hotel</h1>
        <p>Your Ultimate Destination for Seamless Hotel Booking</p>
      </div>

      <div className="section">
        <h2 className="section-title">About Us</h2>
        <p className="section-content">
          ABS-Hotel is more than just a hotel booking app; it's your gateway to
          a world of comfortable stays and unforgettable experiences. We strive
          to make travel hassle-free by providing a seamless and user-friendly
          platform to discover and book hotels around the globe.
        </p>

        <h2 className="section-title">Our Mission</h2>
        <p className="section-content">
          At ABS-Hotel, our mission is to redefine the way you experience
          travel. We are committed to offering a curated selection of hotels,
          ensuring every stay is not just a night's rest but a memorable part of
          your journey. We believe in providing quality accommodation options
          for every traveler, from luxury seekers to budget-conscious explorers.
        </p>

        <h2 className="section-title">Why Choose ABS-Hotel?</h2>
        <p className="section-content">
          - Extensive Selection: Explore a diverse range of hotels to suit your
          preferences and budget.
          <br />
          - Easy Booking: Our user-friendly interface ensures a seamless and
          quick booking process.
          <br />
          - Trusted Partners: We collaborate with reputable hotels to guarantee
          a safe and comfortable stay.
          <br />- Customer Support: Our dedicated support team is available 24/7
          to assist you with any queries or concerns.
        </p>

        <h2 className="section-title">Contact Us</h2>
        <p className="section-content">
          Have questions or need assistance? Feel free to{" "}
          <Link to="/contact">contact us</Link>. Your feedback is valuable to us
          as we continuously strive to enhance your travel experience with
          ABS-Hotel.
        </p>
      </div>
    </>
  );
};

export default About;

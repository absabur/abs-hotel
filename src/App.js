import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set a threshold for when to show/hide popups
      const threshold = 200;

      // Example: Show popup 1 when scrolling down
      if (scrollY > threshold) {
        setShowPopup1(true);
      } else {
        setShowPopup1(false);
      }

      // Example: Show popup 2 when scrolling up
      if (scrollY === 0) {
        setShowPopup2(true);
      } else {
        setShowPopup2(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Header />
        <div className="fake-div"></div>

        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

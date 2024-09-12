import React from "react";
import "./css/Footer.css"; // Import custom CSS if needed

const Footer = () => (
  <footer className="bg-dark text-white text-center py-4 mt-5">
    <div className="container">
      <span>
        &copy; 2024 <span className="text-neon-green">Thoughts.io</span> | All
        Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;

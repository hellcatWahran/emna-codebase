import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="header footer">
      <p>&copy; {new Date().getFullYear()} Copyright </p>
      <a href="https://www.mdbootstrap.com">
        API : Application Programming Interface{" "}
      </a>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="copy">
        Copyright &copy; {new Date().getFullYear()} | Created by{" "}
        <span className="signature">Aleksandra Chirtoska</span>
      </p>
    </footer>
  );
};

export default Footer;

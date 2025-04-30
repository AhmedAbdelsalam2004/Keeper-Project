import React from "react";

const currentDate = new Date();
var time = currentDate.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {time}</p>
    </footer>
  );
}

export default Footer;

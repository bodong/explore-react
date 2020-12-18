import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <nav>
        <Link to="about">About</Link> <span />
      </nav>
      <p>Copyright @ {props.year}</p>
    </footer>
  );
}

export default Footer;

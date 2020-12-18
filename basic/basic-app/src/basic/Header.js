import Moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked((checked) => !checked);
  }

  return (
    <header>
      <button
        onClick={() => props.setState(Moment(new Date()).format("hh:mm:ss"))}
      >
        what time? click me
      </button>
      <input type="checkbox" value={checked} onChange={toggle}></input>
      <h2>
        {props.title} - {props.state} - {checked ? "day" : "night"}
      </h2>
      <nav>
        <Link to="/">Home</Link> <span />
        <Link to="me">Me</Link> <span />
      </nav>
    </header>
  );
}

export default Header;

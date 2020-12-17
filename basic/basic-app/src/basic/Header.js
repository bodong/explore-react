import Moment from "moment";
import { useState } from "react";

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
      <h1>
        {props.title} - {props.state} - {checked ? "day" : "night"}
      </h1>
    </header>
  );
}

export default Header;

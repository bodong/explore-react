import React, { useReducer } from "react";
function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <label htmlFor="checkbox"> {checked ? "checked" : "not checked"}</label>
      <input id="checkbox" type="checkbox" value={checked} onChange={toggle} />
    </div>
  );
}

export default Checkbox;

import React from "react";

function Navbar(props) {
  return (
    <div>
      <div className="items">
        {props.nav.map((el, i) => (
          <ul className="menu">
            <li>{el.item}</li>
            {el.subitem
              ? el.subitem.map((el, i) => (
                  <ul className="dropdownMenu">
                    <li>{el}</li>
                  </ul>
                ))
              : null}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Navbar;

import React from "react";
import '../../../src/App.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      <button className="delete-btn">
      ✗
      </button>
    </span>
  );
}

export default DeleteBtn;

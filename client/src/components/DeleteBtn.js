import React from "react";
import "../styles/DeleteBtn.css";

function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props} tabIndex="0">
      Delete Book
    </button>
  );
}

export default DeleteBtn;

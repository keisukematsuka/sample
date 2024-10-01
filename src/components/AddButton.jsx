import React from "react";
import { Link } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import "../assets/css/addbutton.css";

const AddButton = () => {
  return (
    <button className="add_button">
      <Link className="add_book_link" to="/add">
        <div>Add Book</div>
        <Add />
      </Link>
    </button>
  );
};

export default AddButton;

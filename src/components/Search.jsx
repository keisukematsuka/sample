import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../assets/css/search.css";

const Search = () => {
  return (
    <>
      <form className="search_form" action="">
        <input
          className="search_input"
          type="text"
          placeholder="Search books"
        />
        <Button
          type="submit" // ボタンのタイプをsubmitに設定
          startIcon={<SearchIcon />} // ボタン内にアイコンを表示
          sx={{ width: "10px", justifyContent: "right" }}
        ></Button>
      </form>
    </>
  );
};

export default Search;

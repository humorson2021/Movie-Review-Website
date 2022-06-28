import React, { useState } from "react";
import ListOfMovie from "./ListOfMovie";
import TextField from "@mui/material/TextField";

// const searchInput = document.querySelector("[movie-search]")

// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   movies.forEach(user => {
//     const isVisible =
//       movies..toLowerCase().includes(value) ||
//       movies.email.toLowerCase().includes(value)
//     movies.element.classList.toggle("hide", !isVisible)
//   })
// })

export default function Search() {
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
  return (
      <>
        <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <ListOfMovie input={inputText} />
    </div>
    </>
    );
}
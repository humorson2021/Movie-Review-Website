import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfMovie from "./ListOfMovie";
// import TextField from "@mui/material/TextField";

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
    let navigate = useNavigate();

    let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
    function submitHandler(e) {
        e.preventDefault();
        navigate(`./${inputText}`, { replace: true });
    }
  return (
      <>
      <div className="main">
      <form onSubmit={submitHandler}>
      <div className="search">
                    <input
                        type="text"
                        id="search_field"
                        className="form-control"
                        onChange={inputHandler}
                    />
                    <label for="search_field">search movie</label>
        </div>
        </form>
      <ListOfMovie input={inputText} />
    </div>
    </>
    );
}


    //   <div className="search">
    //     <TextField
    //       id="outlined-basic"
    //       onChange={inputHandler}
    //     //   variant="outlined"
    //       variant="standard"
    //       fullWidth
    //       label="Search"
    //     //   onSubmit={submitHandler}
    //       reDirect
    //     />
    //   </div> 
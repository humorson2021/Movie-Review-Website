// import React from 'react'

// export default function TaskDetails() {
//   return (
//     <div>You are Vieweing Task details</div>
//   )
// }

import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";

export default function MovieDetails({ onAddCommentClicked, showForm }) {
  const headingRef = useRef(null);
    const params = useParams();
    // console.log(params);
    // headingRef.current.focus()

    // const [user, setUser] = useState([]);
    useEffect(() => {
        async function fetchMovie() {
          try {
            const response = await fetch(`/:movieTitle`);
            if (!response.ok) {
              throw Error("Fetch failed");
            }
            const movie = await response.to();
            console.log(movie);
          } catch (err) {
            console.log("catch ", err);
          }
        }
        fetchMovie();
      }, []);
  return (
    <div tabIndex={-1} ref={headingRef}>
      <p>You are Viewing movie -- {params.movieTitle}'s details:</p>
      <p>The rate on IMDB: </p>
      <p>Personal review: </p>
      <button onClick={onAddCommentClicked}>
        {showForm? "Close" :"Add Comment"}
      </button>
    </div>
  )
}
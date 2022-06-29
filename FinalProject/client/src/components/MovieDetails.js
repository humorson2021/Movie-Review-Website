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
  const [movie, setMovie] = useState([]);
    const params = useParams();
    console.log(params);
    // console.log(params);
    // headingRef.current.focus()

    // const [user, setUser] = useState([]);
    useEffect(() => {
        async function fetchMovie() {
          try {
            const response = await fetch(`/api/${params.movieTitle}`
            // , {
            //   method:"POST",
            //   headers:{"Content-type": "application/json"},
            //   body: JSON.stringify({title: params.movieTitle})
            // }
            );
            if (!response.ok) {
              throw Error("Fetch failed");
            }
            const data = await response.json();
            console.log(response);
            setMovie(data);
          } catch (err) {
            console.log("catch ", err);
          }
        }
        fetchMovie();
      }, []);
  return (
    <div tabIndex={-1} ref={headingRef}>
      <p>Movie -- {params.movieTitle} :</p>
      <img src={`${movie.image}`} width="80" height="120" alt={`${movie.title}`} />
      <p>The rate on IMDB: {movie.rate}</p>
      <p>Personal review: {movie.review}</p>
      <p>Users' comments: {movie.comments?(`${movie.comments}`): ("no comment yet")}</p>
      <button onClick={onAddCommentClicked}>
        {showForm? "Close" :"Add Comment"}
      </button>
    </div>
  )
}
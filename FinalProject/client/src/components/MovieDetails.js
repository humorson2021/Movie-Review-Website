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
  const [film, setFilm] = useState([]);
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
            setMovie(data);

            const response2 = await fetch(`https://www.omdbapi.com/?s=${params.movieTitle}&apikey=c8398dca`);
            if (!response2.ok) {
              throw Error("Fetch from OMDB failed");
            }
            const data2 = await response2.json();
            setFilm(data2.Search[0]);
          } 
          catch (err) {
            console.log("catch ", err);
          }
        }
        fetchMovie();
      }, []);
  return (
    <div tabIndex={-1} ref={headingRef}>
      <ul>
      <li>Movie -- {movie.title} :</li>
      {/* <img src={`${movie.image}`} width="80" height="120" alt={`${movie.title}`} /> */}
      <li><img src={film.Poster} alt={`${movie.title}`} /></li>
      <li>Screening time: {film.Year}</li>
      <li>The rate on IMDB: {movie.rate}</li>
      <li>Personal review: {movie.review}</li>
      <li>Users' comments: {movie.comments?(`${movie.comments}`): ("no comment yet")}</li>
      <button onClick={onAddCommentClicked}>
        {showForm? "Close" :"Add Comment"}
      </button>
      </ul>
    </div>
  )
}
import React from "react";
// import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Task({ movie }) {
  // export default function Task({ movie, onDelete }) {
    // function clicked()
    // {
    //     onDelete(task.id)
    // }
  return (
    <li>
      <div className="taskContainer">
        <div className="nameIconContainer">
         {/* <Link to={`/tasks/${task.id}`}> <p>{task.title}</p> </Link> */}
         <Link to={`${movie.title}`}>
           <img src={`${movie.image}`} width="45" height="60" alt={`${movie.title}`} />
           <p>{movie.title}</p>
         </Link>
           <p>rate: {movie.rate}</p>
          {/* <FaTimes role="button" aria-label="delete movie" tabIndex="0" onClick={() => {onDelete(movie.title)}} /> */}
          {/* tabIndex for accessibility, role:ARIA */}
        </div>
      </div>
    </li>
  );
}
import React from "react";
// import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Website({ website }) {
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
         <Link to={`${website.url}`}> <p>{website.name}</p> </Link>
          {/* <FaTimes role="button" aria-label="delete movie" tabIndex="0" onClick={() => {onDelete(movie.title)}} /> */}
          {/* tabIndex for accessibility, role:ARIA */}
        </div>
      </div>
    </li>
  );
}
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
        <div className="websiteContainer">
         {/* <Link to={`/tasks/${task.id}`}> <p>{task.title}</p> </Link> */}
         <a href={`${website.url}`} target="_blank" rel="noreferrer"> <p>{website.name}</p> </a>
          {/* <FaTimes role="button" aria-label="delete movie" tabIndex="0" onClick={() => {onDelete(movie.title)}} /> */}
          {/* tabIndex for accessibility, role:ARIA */}
        </div>
      </div>
    </li>
  );
}
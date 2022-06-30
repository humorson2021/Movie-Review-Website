import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export default function ListOfSearch() {
    let {inputText} = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`/api/movies`);
          if (!response.ok) {
            throw Error("Fetch failed");
          }
          const data = await response.json();
          setMovies(data);
          setIsLoading(false);
        } catch (err) {
          console.log("catch ", err);
        }
      }
      fetchData();
    }, []);

    const filteredMovies = movies.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.title.toLowerCase().includes(inputText);
        }
    })

    return (
        <>
      {isLoading ? (
        <li> Loading... </li>
        ):(
          <>
        <ul>
            {filteredMovies.map((item) => (
                <li key={item.id} className="searchList"><Link to={`../${item.title}`}>{item.title}</Link> rate:{item.rate}</li>
            ))}
        </ul>
        </>
      )}
        </>
    );
}
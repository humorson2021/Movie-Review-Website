import React, { useState, useEffect } from "react";
import Website from "./Website";

export default function MovieWebsites() {
  const [websites, setWebsites] = useState([]);
  const [sources, setSources] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/web/movieWebsites`);
        if (!response.ok) {
          throw Error("Fetch failed");
        }
        const data = await response.json();
        setWebsites(data);

        const response2 = await fetch(`/web/movieSources`);
        if (!response2.ok) {
          throw Error("Fetch failed");
        }
        const data2 = await response2.json();
        setSources(data2);

        setIsLoading(false);
      } catch (err) {
        console.log("catch ", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <li> Loading... </li>
      ) : (
        <>
        <li><em>Interesting external movie websites:</em></li>
          {websites.map((item) => (
            <Website key={item._id} website={item} />
          ))}
        <li><em>Top5 external movie sources:</em></li>
          {sources.map((item) => (
            <Website key={item._id} website={item} />
          ))}
        </>
      )}
    </>
  );
}
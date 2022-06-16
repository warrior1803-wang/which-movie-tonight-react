import React, { useCallback } from "react";
import films from "../films_data/films.json";
export default function MovieSelect() {
    const loadMovies = [];

    for (const key in films) {
      loadMovies.push({
        id: key,
        title: films[key].movie_title,
        link: films[key].link,
      });
    }
   const fetchMovieInfo = useCallback(async()=>{
     const response = await fetch('https://api.themoviedb.org/3/movie/tt4154756?api_key=%20a80c67fc26870104bf793102862fb5d2&language=en-US')
     
   })
    const chooseMovie = () => {
    
    let randomNumber = Math.floor(Math.random()*loadMovies.length)
    console.log(loadMovies[randomNumber].link)

  };
  return (
    <div>
      <h1>which movie for tonight?</h1>
      <button onClick={chooseMovie}>Choose</button>
    </div>
  );
}

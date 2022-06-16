
import './App.css';
import React, { useState } from 'react';

import films from './films_data/films.json'
function App() {
  
  const [movie, setmovie] = useState('')
const fetchMoviesHandler=()=>{
  const loadMovies=[]
  for(const key in films){
  loadMovies.push(
    {
      id:key,
      title:films[key].movie_title,
      link:films[key].link

    }
  )
  }
  setmovie(loadMovies)
  console.log(movie)
}
  return (
    <div className="App">
     
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
     
    </div>
  );
}

export default App;



import React from 'react';

import films from './films_data/films.json'
function App() {
  
  // const [movie, setmovie] = useState('')

  return (
    <div className="App">
     
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
     {films.map((film)=>(
       <li key={film.link}>
         <h2>{film.movie_title}</h2>
         <h3>{film.link}</h3>
       </li>
     ))}
    </div>
  );
}

export default App;

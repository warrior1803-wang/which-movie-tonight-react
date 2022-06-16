

import React from 'react';

import films from './films_data/films.json'
function App() {
  
  // const [movie, setmovie] = useState('')
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
  
  console.log(loadMovies)
}
  return (
    <div className="App">
     
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
     {films.map((film)=>(
       <li>
         <h2>{loadMovies.title}</h2>
         {/* <h3>{film.link}</h3> */}
       </li>
     ))}
    </div>
  );
}

export default App;

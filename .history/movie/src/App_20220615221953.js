

import React from 'react';
import MovieSelect from './components/MovieSelect';
function App() {
  
  // const [movie, setmovie] = useState('')

  return (
    <div className="App"
    style={width:'1'}>
  
     
    <MovieSelect></MovieSelect>
     {/* {films.map((film)=>(
       <li key={film.link}>
         <h2>{film.movie_title}</h2>
         <h3>{film.link}</h3>
       </li>
     ))} */}
    </div>
  );
}

export default App;
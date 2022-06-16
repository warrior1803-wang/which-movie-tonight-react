

import React from 'react';
import MovieSelect from './components/MovieSelect';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  // const [movie, setmovie] = useState('')

  return (
    <div className="App">
      <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></head>
     
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

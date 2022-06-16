import logo from './logo.svg';
import './App.css';
import films from './films_data/films.json'
function App() {
const fetchMoviesHandler=()=>{
  const 
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    </div>
  );
}

export default App;

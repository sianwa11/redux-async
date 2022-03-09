import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LOADING_STATE,
  loadingState,
  uploadMovies,
} from "./movies/movie-slice";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.movies);
  useEffect(() => {
    if (state.status === "done") console.log(state);
  }, [state]);

  useEffect(() => {
    dispatch(loadingState(LOADING_STATE.REQUESTED));
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((el) => {
          dispatch(uploadMovies(el));
        });
        dispatch(loadingState(LOADING_STATE.DONE));
      })
      .catch((err) => dispatch(LOADING_STATE.ERROR));
  }, [dispatch]);

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
    </div>
  );
}

export default App;

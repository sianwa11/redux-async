import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LOADING_STATE,
  loadingState,
  uploadMovies,
} from "./movies/movie-slice";

import "./App.css";

function App() {
  const [movies, setMovies] = useState(null);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.movies);
  useEffect(() => {
    if (state.status === "done") console.log(state);
  }, [state, dispatch]);

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

  return <div className="App"></div>;
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies } from "./movies/movie-slice";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.movies);
  useEffect(() => {
    if (state.status === "done") console.log(state);
  }, [state, dispatch]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;

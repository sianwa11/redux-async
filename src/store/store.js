import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../movies/movie-slice";

export default configureStore({ reducer: { movies: movieReducer } });

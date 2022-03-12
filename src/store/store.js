import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../movies/movie-slice";

// Uses thunkMiddleware by default
export default configureStore({ reducer: { movies: movieReducer } });

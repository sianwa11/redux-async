import { createSlice } from "@reduxjs/toolkit";

export const LOADING_STATE = {
  WAITING: "waiting",
  REQUESTED: "requested",
  ERROR: "error",
  DONE: "done",
};

const initialState = { film: [], status: LOADING_STATE.WAITING };

export const movieSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    uploadMovies(state, action) {
      state.film.push(action.payload);
    },
    loadingState(state, action) {
      state.status = action.payload;
    },
  },
});

// Thunk function
export const fetchMovies = () => {
  return (dispatch, getState) => {
    dispatch(loadingState(LOADING_STATE.REQUESTED));
    return fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((el) => {
          dispatch(uploadMovies(el));
        });
        dispatch(loadingState(LOADING_STATE.DONE));
      })
      .catch((err) => dispatch(LOADING_STATE.ERROR));
  };
};

export const { uploadMovies, loadingState } = movieSlice.actions;

export default movieSlice.reducer;

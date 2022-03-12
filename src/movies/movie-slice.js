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

export const { uploadMovies, loadingState } = movieSlice.actions;

export default movieSlice.reducer;

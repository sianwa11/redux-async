import { createSlice } from "@reduxjs/toolkit";

export const LOADING_STATE = {
  WAITING: "waiting",
  REQUESTED: "requested",
  ERROR: "error",
  DONE: "done",
};

export const movieSlice = createSlice({
  initialState: { film: [], status: LOADING_STATE.WAITING },
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

import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    isLiked: false,
  },
  reducers: {
    toggleLike: (state) => {
      state.isLiked = !state.isLiked;
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export const selectIsLiked = (state) => state.like.isLiked;
export default likeSlice.reducer;

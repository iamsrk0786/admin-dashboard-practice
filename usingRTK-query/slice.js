import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { selectedPost: null },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;









// Explanation:
// createSlice: Simplifies creating reducers and actions.
// initialState: Stores the currently selected post.
// setSelectedPost: Action to set a post for editing.
// postsSlice.reducer: Adds this slice to the Redux store.
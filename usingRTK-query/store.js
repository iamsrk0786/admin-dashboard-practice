import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../usingRTK-query/rtkq";
import postsReducer from "../usingRTK-query/slice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});


// Explanation:
// configureStore: Sets up the Redux store with reducers and middleware.
// postsApi.reducerPath: Automatically created by RTK Query to store fetched API data.
// postsReducer: Manages local Redux state (like a selected post).
// middleware: Adds RTK Query middleware for handling API calls and caching.
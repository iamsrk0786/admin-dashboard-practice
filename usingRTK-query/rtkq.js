import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;





// Explanation:
// createApi: Sets up RTK Query's API logic.

// reducerPath: Name of the slice in the Redux store.

// baseQuery: Configures the base URL for API requests.

// tagTypes: Used for cache invalidation (refreshing the data when needed).

// Endpoints:

// getPosts: Fetches all posts.
// addPost: Adds a new post and invalidates cache to refresh the list.
// updatePost: Updates a specific post using its ID.
// deletePost: Deletes a post and invalidates the cache.
// providesTags: Identifies the data fetched.

// invalidatesTags: Invalidates cache to refetch updated data.


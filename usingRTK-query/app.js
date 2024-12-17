import React from "react";
import { Provider } from "react-redux";
import { store } from "../usingRTK-query/store";
import PostsList from "../usingRTK-query/postitem";
import AddPost from "../usingRTK-query/addpost";
import EditPost from "../usingRTK-query/editpost";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Post Management</h1>
        <AddPost />
        <PostsList />
        <EditPost />
      </div>
    </Provider>
  );
};

export default App;

import React, { useReducer } from "react";
import uuid from "uuid";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";

const PostState = props => {
  const initialState = {
    posts: [
      {
        id: 1,
        title: "First",
        body: "here is first post",
        comment: ["1"],
        like: 0
      },
      {
        id: 2,
        title: "Second",
        body: "here is second post",
        comment: [],
        like: 0
      },
      {
        id: 3,
        title: "Third",
        body: "here is third post",
        comment: [],
        like: 0
      }
    ],
    setcurrent: null,
    comment: null
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  //Add Post
  const addPost = async post => {
    post.id = uuid();
    dispatch({
      type: "ADD_POST",
      payload: post
    });
  };

  //Delete Post
  const deletePost = id => {
    dispatch({ type: "DELETE_POST", payload: id });
  };

  // Set Current post
  const setCurrent = post => {
    dispatch({ type: "SET_CURRENT", payload: post });
  };
  //Clear Current Post
  const clearCurrent = () => {
    dispatch({ type: "CLEAR_CURRENT" });
  };

  // Update Post
  const updatePost = post => {
    dispatch({ type: "UPDATE_POST", payload: post });
  };

  //Add comment
  const addComment = newpost => {
    dispatch({ type: "ADD_COMMENT", payload: newpost });
  };

  //Add Like
  const addLike = post => {
    dispatch({ type: "ADD_LIKE", payload: post });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        comment: state.comment,
        addPost,
        deletePost,
        setCurrent,
        clearCurrent,
        updatePost,
        addComment,
        addLike
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;

import React, { useContext } from "react";
import PostContext from "../context/post/postContext";
import PostItem from "./PostItem";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts } = postContext;
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

import React, { useContext, useState } from "react";
import PostContext from "../context/post/postContext";

const PostItem = ({ post }) => {
  const init = { comment: "" };
  const [cominput, setCominput] = useState({ com: "" });
  const { com } = cominput;

  const onchange = e =>
    setCominput({ ...cominput, [e.target.name]: e.target.value });

  console.log("cominput is", cominput);

  const handleComment = post => {
    setComment(post);
  };

  const postContext = useContext(PostContext);
  const {
    deletePost,
    setCurrent,
    clearCurrent,
    setComment,
    comment,
    addComment
  } = postContext;
  console.log("comment from post.comment", comment);
  //From posts
  const { id, title, body } = post;

  const handleDelete = id => {
    deletePost(id);
    clearCurrent();
  };

  const handleEdit = post => {
    setCurrent(post);
  };
  const onSubmit = e => {
    e.preventDefault();
    addComment(comment && comment, cominput);
  };

  return (
    <div className="card bg-light">
      {console.log(post.comment)}
      <h3>
        Titel: <b>{title}</b>
      </h3>
      <p>
        Post: <b>{body}</b>
      </p>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => handleEdit(post)}
        >
          edit
        </button>
        {comment && comment.id === post.id ? (
          <form onSubmit={onSubmit}>
            <input
              type="comment"
              name="com"
              value={com}
              onChange={onchange}
            ></input>
            <input type="submit" value="Reply to Post" />
          </form>
        ) : (
          ""
        )}
        <button
          className="btn btn-dark btn-sm"
          onClick={() => handleComment(post)}
        >
          Comment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
      </p>
    </div>
  );
};

export default PostItem;

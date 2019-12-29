import React, { useContext, useState } from "react";
import PostContext from "../context/post/postContext";

const PostItem = ({ post }) => {
  const [showform, setShowform] = useState(false);
  const [cominput, setCominput] = useState({ com: "" });
  const { com } = cominput;

  const onchange = e =>
    setCominput({ ...cominput, [e.target.name]: e.target.value });

  const postContext = useContext(PostContext);
  const {
    deletePost,
    setCurrent,
    clearCurrent,
    comment,
    addComment,
    addLike
  } = postContext;

  console.log("post with comment is", post);
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
    const newcomment = [...post.comment, com];
    setCominput({ com: "" });
    const newpost1 = { ...post, comment: newcomment };
    addComment(newpost1);
  };
  const handleCommentLike = c => {
    // const newComlike = { ...c, like: ++c.like };
    console.log("newcomlike is", c);
  };
  const handleLike = post => {
    const newlike = { ...post, like: ++post.like };
    console.log("newlike is", newlike);
    // addLike(post);
  };

  return (
    <div className="card bg-light">
      <h3>
        Titel: <b>{title}</b>
      </h3>
      <p>
        Post: <b>{body}</b>
      </p>
      {showform &&
        post.comment.map((c, index) => (
          <p>
            {c}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => handleCommentLike(c)}
            >
              {index}Like
            </button>
          </p>
        ))}
      <p>
        {showform && (
          <form onSubmit={onSubmit}>
            <input
              type="comment"
              name="com"
              value={com}
              onChange={onchange}
            ></input>
            <input type="submit" value="Reply to Post" />
          </form>
        )}
        <button
          className="btn btn-dark btn-sm"
          onClick={() => (showform ? setShowform(false) : setShowform(true))}
          // handleComment(post)}
        >
          Comment
        </button>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => handleEdit(post)}
        >
          edit
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleLike(post)}
        >
          Like
        </button>
        <button
          className="btn btn-secondary btn-sm"
          // onClick={() => handleDelete(id)}
        >
          Unlike
        </button>
      </p>
    </div>
  );
};

export default PostItem;

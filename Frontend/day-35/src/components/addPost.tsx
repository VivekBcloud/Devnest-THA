import React from "react";
import { PostIcon } from "../assets/icons";
import "../styles/newPostStyle.scss";
const AddPost = () => {
  return (
    <div className="new-post-container">
      <div className="profile-container">
        <span
          className="profile"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></span>
        <div className="place-holder">What's new meowth</div>
      </div>
      <button className="post-btn">
        <PostIcon />
        <h3>Post it!</h3>
      </button>
    </div>
  );
};

export default AddPost;

import React from "react";
import AddPost from "./addPost";
import Posts from "./posts";
import Stories from "./stories";

const MiddleSection = () => {
  return (
    <div className="middle-section">
      <Stories />
      <AddPost />
      <Posts />
    </div>
  );
};

export default MiddleSection;

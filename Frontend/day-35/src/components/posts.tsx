import React from "react";
import getPostData from "../assets/postData";
import "../styles/postsStyle.scss";
import { DotIcon } from "../assets/icons";
//types
type postType = {
  post: {
    name: string;
    desc: string;
    img: string;
  };
};
type postDataType = {
  name: string;
  desc: string;
  img: string;
};
const Posts = () => {
  const PostCard = ({ post }: postType) => {
    return (
      <div className="post-card-container">
        <div className="post-name">
          <div className="profile-container">
            <span
              className="profile"
              style={{
                backgroundImage: `url(${post.img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></span>
            {post.name}
          </div>
          <DotIcon />
        </div>
        <div className="post-desc">
          <p>{post.desc}</p>
        </div>
        <img src={post.img} alt={post.name} />
      </div>
    );
  };

  const postData: postDataType[] = getPostData();

  return (
    <div className="posts-container">
      {postData.length === 0 ? (
        <h1>No stories to show</h1>
      ) : (
        postData.map((post, idx) => <PostCard post={post} key={idx} />)
      )}
    </div>
  );
};

export default Posts;

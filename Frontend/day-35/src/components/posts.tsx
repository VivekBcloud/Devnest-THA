import React, { useEffect } from "react";
import getPostData from "../assets/postData";
import "../styles/postsStyle.scss";
//scroll behavior
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
//icons
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
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: "-200px",
    });
    useEffect(() => {
      if (inView) {
        animation.start("visible");
      }
    }, [animation, inView]);
    const cardAnimation = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      },
      hidden: {
        opacity: 0,
        y: 72,
      },
    };
    return (
      <motion.div
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={cardAnimation}
        className="post-card-container"
      >
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
      </motion.div>
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

import { motion } from "framer-motion";
import React from "react";
import { storyData } from "../assets/storyData";
import "../styles/storyStyle.scss";
//types
type storyType = {
  story: {
    name: string;
    img: string;
  };
};
type storyDataType = {
  name: string;
  img: string;
};

const Stories = () => {
  const StoryCard = ({ story }: storyType) => {
    return (
      <div
        className="story-card"
        style={{
          backgroundImage: `url(${story.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="story-provider">
          <p>{story.name}</p>
        </div>
      </div>
    );
  };
  const storiesData: storyDataType[] = storyData();
  return (
    <motion.div
      initial={{ x: 70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="stories-container"
    >
      {storiesData.length === 0 ? (
        <h1>No stories to show</h1>
      ) : (
        storiesData.map((story, idx) => <StoryCard story={story} key={idx} />)
      )}
    </motion.div>
  );
};

export default Stories;

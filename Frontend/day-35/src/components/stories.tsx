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
    <div className="stories-container">
      {storiesData.length === 0 ? (
        <h1>No stories to show</h1>
      ) : (
        storiesData.map((story, idx) => <StoryCard story={story} key={idx} />)
      )}
    </div>
  );
};

export default Stories;

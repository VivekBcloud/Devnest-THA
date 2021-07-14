import React from "react";
import "./styles/template.css";

const Template = ({ template, setEditMeme, editMode, index }) => {
  return (
    <img
      onClick={() => {
        editMode(template, index);
      }}
      className="meme-img"
      src={template.url}
    ></img>
  );
};

export default Template;

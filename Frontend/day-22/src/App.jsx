import React, { useState, useEffect } from "react";
import Template from "./Components/Template";
import "./App.css";

function App() {
  const [templates, setTemplates] = useState([]);
  const [editMeme, setEditMeme] = useState(false);
  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        console.log(data.data.memes);
        setTemplates(data.data.memes);
      } catch (err) {
        console.log(err);
      }
    };
    response();
    console.log("templates", templates);
  }, []);

  const editMode = (template, index) => {
    return (
      <div>
        <img src="template.url" />
      </div>
    );
  };
  return (
    <>
      <h1>Meme Generator</h1>
      <div className="templates">
        {templates.map((template, index) => {
          return (
            <Template
              template={template}
              setEditMeme={setEditMeme}
              editMode={editMode}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

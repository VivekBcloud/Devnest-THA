import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, delNote } from "./actions";
import "./App.css";
import { reducerType } from "./reducer";
function App() {
  const notes = useSelector((s: reducerType) => s.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <div className="App" style={{ fontSize: "1.5rem", marginTop: "0.7rem" }}>
        <label htmlFor="inputnote">Input</label>
        <input
          type="text"
          name="inputnote"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          style={{ fontSize: "1.5rem" }}
        />
        <button
          onClick={() => {
            if (input === "") return;
            dispatch(addNote(input));
            setInput("");
          }}
          style={{ fontSize: "1.5rem", padding: "0 1rem" }}
        >
          Add Note
        </button>
      </div>
      <div
        style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.3rem" }}
      >
        {notes.length === 0 ? (
          <h2>Input the new note </h2>
        ) : (
          notes.map((item: string, idx: number) => (
            <li key={idx} style={{ fontSize: "1.4rem" }}>
              {item}
              <button
                style={{ marginLeft: "0.3rem", fontSize: "1.4rem" }}
                onClick={() => dispatch(delNote(idx))}
              >
                del
              </button>
            </li>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

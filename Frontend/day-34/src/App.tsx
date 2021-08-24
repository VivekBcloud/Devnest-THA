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
      <div className="App">
        <label htmlFor="inputnote">Input</label>
        <input
          type="text"
          name="inputnote"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (input === "") return;
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add Note
        </button>
      </div>
      <div>
        {notes.map((item: string, idx: number) => (
          <li key={idx}>
            {item}
            <button onClick={() => dispatch(delNote(idx))}>del</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;

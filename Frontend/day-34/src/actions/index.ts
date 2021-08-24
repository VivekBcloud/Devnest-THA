const addNote = (name: String) => {
  return {
    type: "ADD_NOTE",
    payload: name,
  };
};
const delNote = (id: number) => {
  return {
    type: "DEL_NOTE",
    payload: id,
  };
};

export { addNote, delNote };

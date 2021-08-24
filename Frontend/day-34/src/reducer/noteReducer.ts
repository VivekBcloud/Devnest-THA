interface actionType {
  type: string;
  payload: string | number;
}

const noteReducer = (state: any = [], action: actionType) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DEL_NOTE":
      return state.filter((_: string, idx: number) => action.payload !== idx);

    default:
      return state;
  }
};
export default noteReducer;

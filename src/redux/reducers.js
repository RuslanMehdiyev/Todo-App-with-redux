const initialState = [];

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return [...state.filter((e) => e !== action.payload)];
    case "UPDATE":
      let elIndex = state.findIndex((e) => e == action.payload);
      let temp = [...state];
      temp.splice(elIndex, 1, action.payload);
      return temp;
    default:
      return state;
  }
};

export default storeReducer;

export const reducer = (state, action) => {
  switch (action.type) {
    case "buy-product":
      return { ...state, counter: state.counter - 1 };
    case "reset-product":
      return {...state, counter:action.payload};
    default:
      return state;
  }
};

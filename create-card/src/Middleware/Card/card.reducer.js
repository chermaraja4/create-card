import { INCREMENT } from "./card.action";

export const initialState = {
  total_Card: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        total_Card: [...state.total_Card, action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;

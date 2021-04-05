import { ADD_SALE } from "../../types";

const  INITIAL_STATE = { sales: [] };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_SALE:
      return { ...state, sales:[ ...state.sales, action.sale]}

    default:
      return state;
  }
}
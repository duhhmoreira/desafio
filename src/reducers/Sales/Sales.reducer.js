import { 
  ADD_SALE_ERROR, 
  ADD_SALE_SUCESS, 
  GET_SALES_SUCESS,
 } from "../../types";

const  INITIAL_STATE ={
  sales:[]
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_SALE_SUCESS:
      return { ...state, sales:[ ...state.sales, action.payload]};
    case ADD_SALE_ERROR:
      return {... state, sales:[ ...state.sales.error, 'Cadastro duplicado']};
    case GET_SALES_SUCESS:
        return { ...state, sales: action.payload};
    default:
      return state;
  }
}
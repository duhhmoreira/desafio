import {
  ADD_SALE,
  ADD_SALE_SUCESS,
  ADD_SALE_ERROR,
  GET_SALES,
  GET_SALES_SUCESS,
  GET_SALES_ERROR,
} from '../../types';

import { addNewSale, getSalesFromUser } from '../../services/sales';

const addSale = () => ({
  type: ADD_SALE,
  payload: true,
});

const addSaleSucess = (sale) => ({
  type: ADD_SALE_SUCESS,
  payload: sale,
});

const addSaleError = (error) => ({
  type: ADD_SALE_ERROR,
  payload: error,
});

const getSales = () => ({
  type: GET_SALES,
  payload: true,
});

const getSalesSucess = (sales) => ({
  type: GET_SALES_SUCESS,
  payload: sales,
});

const getSalesError = () => ({
  type: GET_SALES_ERROR,
  payload: true,
});

export function addNewSaleAction(sale) {
  return async (dispatch) => {
    dispatch(addSale());
    try {
      await addNewSale(sale);
      dispatch(addSaleSucess(sale));
    } catch (error) {
      console.log(error);
      dispatch(addSaleError(true));
    }
  };
}

export function getSalesAction() {
  return async (dispatch) => {
    dispatch(getSales());
    try {
      const res = await getSalesFromUser();
      dispatch(getSalesSucess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(getSalesError());
    }
  };
}
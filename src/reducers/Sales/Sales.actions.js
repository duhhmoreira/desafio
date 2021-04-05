import {
  ADD_SALE_SUCESS,
  ADD_SALE_ERROR,
  GET_SALES_SUCESS,
} from '../../types';

import { addNewSale, getSalesFromUser } from '../../services/sales';

const addSaleSucess = (sale) => ({
  type: ADD_SALE_SUCESS,
  payload: sale,
});


const addSaleError = () => ({
  type: ADD_SALE_ERROR,
  payload: true,
});

const getSalesSucess = (sales) => ({
  type: GET_SALES_SUCESS,
  payload: sales,
});

export function addNewSaleAction(sale) {
  return async (dispatch) => {
    try {
      await addNewSale(sale);
      dispatch(addSaleSucess(sale));
    } catch (error) {
      dispatch(addSaleError(error));
      console.log(error);
    }
  };
}

export function  getSalesAction() {
  return async function (dispatch) {
    try {
      const res = await getSalesFromUser();
      dispatch(getSalesSucess(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
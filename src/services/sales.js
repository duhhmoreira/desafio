import { axiosClient, configHeader } from "./config";

const getSellerId = localStorage.getItem('sellerId');

export const getSalesFromUser = async () => {
    try {
        await axiosClient.get(`/sales?sellerId=${localStorage.getItem('sellerId')}`, configHeader);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  
  export const addNewSale = async (sale) => {
      const newSale = {
          "id": sale.id, 
          "totalValue": sale.totalValue,
          "date": sale.date, 
          "sellerId": getSellerId
        };
    try {
        await axiosClient.post('/sales', newSale, configHeader);
    } catch (error) {
      return error;
    }
  };




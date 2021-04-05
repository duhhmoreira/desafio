import { axiosClient, configHeader } from "./config";

const getSellerId = localStorage.getItem('sellerId');

export const getSalesFromUser = () => {
    return axiosClient.get(`/sales?sellerId=${localStorage.getItem('sellerId')}`, configHeader); 
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




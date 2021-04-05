
import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core';
import CardInfo from '../../components/CardInfo/CardInfo';
import {  useDispatch, useSelector } from 'react-redux';
import { selectAllSales, selectCashbackTotalValue } from '../../reducers/Sales/Sales.selectors';
import { getSalesAction } from '../../reducers/Sales/Sales.actions';
import "./CashbackPage.Style.scss";


const CashbackPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectAllSales);
  const value = useSelector(selectCashbackTotalValue);

  useEffect(() => {
    const getSales = () => dispatch(getSalesAction());
    getSales();
    }, []);

  return (
    <div className="content">
      <Typography component="h5" variant="h5" color="primary" align='center'>
      Valor Total de Cashback recebido: R$ {value}
      </Typography>
      <div className='listSales'>
        {state.sales.reverse().map(sale => (<CardInfo key={sale.id} sale={sale}/>))}
      </div>
    </div>
    );
}

export default CashbackPage;
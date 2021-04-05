
import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core';
import CardInfo from '../../components/CardInfo/CardInfo';
import "./HomePageStyle.scss";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllSales } from '../../reducers/Sales/Sales.selectors';
import FormNewSale from '../../components/FormNewSale/FormNewSale';
import { getSalesAction } from '../../reducers/Sales/Sales.actions';


const HomePage = () => {
  const state = useSelector(selectAllSales);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSales = () => dispatch(getSalesAction());
    getSales();
    }, []);

  return (
    <div>
      <main className='content'>
        <div className="columnListSale">
          <div className='container'>
            <div className="banner"/>
            <Typography component="h5" variant="h5" color="primary" align='center'>
            Confira aqui suas vendas e cashbacks recebidos
          </Typography>
            <div className='listSales'>
            {state.sales.reverse().map(sale => (<CardInfo key={sale.id} sale={sale}/>))}
            </div>
          </div>
        </div>

        <div className="columnAddSale">
          <FormNewSale/>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
import React, { useState } from 'react'
import { useHistory  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addNewSaleAction } from '../../reducers/Sales/Sales.actions';
import { Button, FormControl, TextField, Typography } from '@material-ui/core';
import "./FormNewSale.Styles.scss";


const FormNewSale = (  ) => {
    let history = useHistory();
    const error = useSelector(state => state.sales.error);
    const dispatch = useDispatch();

    const [newSale, setNewSale] = useState({
        id: '',
        totalValue: '',
        date: '',
    });

    const handleChange = (e) => {
    setNewSale({
      ...newSale,
      [e.target.id]: e.target.value,
    });
  };

  const addNewSale = (sale) => dispatch(addNewSaleAction(sale));

  const submitSale = (e) =>{
    e.preventDefault();
    const { id, totalValue, date } = newSale;
    addNewSale({
      'id': id,
      'totalValue': totalValue,
      'date': date
    });
  }

  const onSubmitWeb = (e) => {
    submitSale(e);
  };

  const onSubmitMobile = (e) => {
    submitSale(e);
    history.push('/home');
  };

    return (
    <div className="formInMobile">
        <Typography component="h5" variant="h5" color="primary" align='center'>
        Cadastro de venda
        </Typography>
        <p align='center'>
        Cadastre o codigo da venda, valor total e data para verificar o valor do cashback na lista de vendas
        </p>
        {error && <p className='error'>{error}</p>}
        <FormControl className="formSale">
            <TextField 
            required 
            type="text" 
            id="id" 
            label="Codigo" 
            onBlur={handleChange}  
            InputProps={{ className: "input"}}/>
            <TextField 
            required 
            type="text" 
            id="totalValue" 
            label="Valor total" 
            onBlur={handleChange} 
            InputProps={{ className: "input"}}/>
            <TextField 
            required 
            InputLabelProps={{ shrink: true, }} 
            type="date" 
            id="date" 
            label="Data" 
            onBlur={handleChange} 
            InputProps={{ className: "input"}}/>
            <Button type="submit" variant="contained" color="primary" className="buttonMobile" onClick={onSubmitWeb}>Cadastrar</Button>
            <Button type="submit" variant="contained" color="primary" className="buttonWeb" onClick={onSubmitMobile}>Cadastrar</Button>
        </FormControl>
    </div>
    );
}

export default FormNewSale;
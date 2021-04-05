import React  from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Status from '../Status/Status';
import './CardInfo.style.scss'

const CardInfo = ({ sale }) => {
  const status = sale.status;
 
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  let data = new Date(sale.date);
  let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
  
  return (
    <Card  variant='outlined' className='card'>
        <div className='sale'>
            <Typography component="h6" variant="h6" color='primary'>Dados da venda</Typography>
            <Typography variant="subtitle1" color="textSecondary">Cod:{sale.id}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Data: {dataFormatada}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Valor: R${sale.totalValue}</Typography>
        </div>

        <div className='status-sale'>
            <Status status={sale.status || ''}></Status>
        </div>
        <div className='cashback'> 
        <p className={status === 'approved' ? 'approved': 'reproved'}>Cashback</p>
            <p className={status === 'approved' ? 'approved': 'reproved'}>{sale.totalPercentCashback}%</p>
            <p className={status === 'approved' ? 'approved': 'reproved'}>R${sale.totalValueCashback}</p>
        </div>
    </Card>
  );
}

export default CardInfo;
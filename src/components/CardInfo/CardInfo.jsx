import React  from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Status from '../Status/Status';
import './CardInfo.style.scss'
const CardInfo = ({ sale }) => {
  
  return (
    <Card  variant='outlined' className='card'>
        <div className='sale'>
            <Typography component="h5" variant="h5">1</Typography>
            <Typography variant="subtitle1" color="textSecondary">10/10/2002</Typography>
            <Typography component="h5" variant="h5">R$100</Typography>
        </div>

        <div className='status-sale'>
            <Status status='aproved'></Status>
        </div>
        <div className='cashback'> 
            <Typography component="h5" variant="h5"> 8%</Typography>
            <Typography component="h5" variant="h5"> R$8</Typography>
        </div>
        
    </Card>
  );
}

export default CardInfo;
import React  from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import './Status.Styles.scss';

const Status = (statusSale) => {
    
     const typeStatus = (statusSale) => {
        if(statusSale === 'approved') return <DoneIcon className='success'/>;
        if(statusSale === 'reproved') {
            return <ErrorOutlineIcon  className='error'/>;
        } else {
            return <HourglassEmptyIcon className='waiting'/>;
        }
    }

    return typeStatus(statusSale.status);
}

export default Status;
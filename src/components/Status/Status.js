import React  from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const Status = (  ) => {
    
     const typeStatus = (status) => {
        if(status === 'aproved') return <DoneIcon/>;
        if(status === 'reproved') {
            return <ErrorOutlineIcon/>;
        } else {
            return <HourglassEmptyIcon/>;
        }
    }

    return (
        <ErrorOutlineIcon/>
    );
}

export default Status;
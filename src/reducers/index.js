import { combineReducers } from 'redux';
import salesReducer from './Sales/Sales.reducer';

const rootReducer = combineReducers({
   sales: salesReducer
});

export default rootReducer;
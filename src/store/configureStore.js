import { createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga'  

import rootReducer from '../reducers';

const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware))
  }
};

export default configureStore;
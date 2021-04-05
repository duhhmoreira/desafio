import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { MuiThemeProvider } from '@material-ui/core';
import theme  from './styles/theme';
import './index.css';
import App from './App';

const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
    </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
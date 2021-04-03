import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import './index.css';
import LoginPage from './pages/Login/LoginPage';
import { MuiThemeProvider } from '@material-ui/core';
import theme  from './styles/theme'
import SignupPage from './pages/Signup/SignupPage';
import HomePage from './pages/Home/HomePage';

const store = configureStore();

render(
<React.StrictMode>
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <LoginPage/>
       </MuiThemeProvider>
    </Provider>
    </React.StrictMode>,

    document.getElementById('root')
);
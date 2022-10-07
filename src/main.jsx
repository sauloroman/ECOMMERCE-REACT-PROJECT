import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EcommerceApp } from './EcommerceApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/queries.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>

            <HashRouter>
                <EcommerceApp />
            </HashRouter>

        </Provider>
    </React.StrictMode>
);

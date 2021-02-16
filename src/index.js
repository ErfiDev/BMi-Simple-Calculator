import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Store/index';

render(
    <Provider store={Store}>
        <App />
    </Provider>    
, document.getElementById("root"));
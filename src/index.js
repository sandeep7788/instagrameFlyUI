import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'

const store= createStore(rootReducer)
console.warn(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

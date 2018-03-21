import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import productsReducer from "./reducers/products";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductWatcher } from "./saga";
let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    productsReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware,createLogger()))
);
sagaMiddleware.run(getProductWatcher);
ReactDOM.render(
     <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

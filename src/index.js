import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { createStore, applyMiddleware, componse } from 'redux';
import thunk from 'redux-thunk';


import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
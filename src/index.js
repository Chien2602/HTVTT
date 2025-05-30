import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style/index.css';
import { AuthProvider } from './component/topnav/AuthContext';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
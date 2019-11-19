import React from 'react';
import ReactDOM from 'react-dom';
import './anim.css';
import '../src/fonts/fonts.scss';
import './index.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();

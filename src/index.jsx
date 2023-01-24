import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App className="app"/>
      </Provider>
    </Router>,
    document.getElementById('react-root'),
  );
  
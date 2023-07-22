import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./i18n"

const appRoot = document.getElementById('root')!
appRoot.setAttribute('notranslate', "true")
ReactDOM.render(
        <App/>,
    appRoot
  );
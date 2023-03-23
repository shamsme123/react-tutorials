import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log("App ===>",App);

//Entry point for React, App => is the name of the React Component
ReactDOM.render(<App data="1"/>,document.getElementById("root")); //virtual DOM <> RealDOM

//React Component or JSX Component
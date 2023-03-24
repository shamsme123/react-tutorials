import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log("App ===>",App);



//Entry point for React, App => is the name of the React Component
ReactDOM.render(<App data="1" data1="2" data2="3"/>,document.getElementById("root")); //virtual DOM <> RealDOM

//React Component or JSX Component
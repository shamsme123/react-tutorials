import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log("App ===>",App);



//Entry point for React, App => is the name of the React Component
ReactDOM.render(<App data="Home" data1="About" data2="Contact"/>,
document.getElementById("root")); //virtual DOM <> RealDOM

//React Component or JSX Component
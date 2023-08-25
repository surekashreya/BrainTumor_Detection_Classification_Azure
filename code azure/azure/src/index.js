import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import CustomVision from './CustomVision';
// import Classification from './Classification'
import Mainpage  from './mainpage';
import Chatbot from './chatbot';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <CustomVision></CustomVision> */}
  {/* <Classification></Classification> */}
  <Mainpage></Mainpage>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

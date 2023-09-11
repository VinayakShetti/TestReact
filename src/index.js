import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About';
import IncDec from './Components/IncDec';
import Axioss from './Components/Axioss';
// import Pagination from './Components/Pagination';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* //<Styling />*/}
    {/* <IncDec/>  */}
    {/* <Reducer /> */}
    {/* <About /> */}
    <Axioss />
    {/* <Pagination/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

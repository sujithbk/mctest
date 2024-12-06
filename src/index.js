import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter ,  Route,  Routes} from 'react-router-dom';
import Second from './pages/Second';
import ThirdSection from './pages/ThirdSection';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>  
   <Routes  >
    <Route path='/' Component={App}></Route>
    <Route path='/second' Component={Second}></Route>
    <Route path='/third' Component={ThirdSection}></Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

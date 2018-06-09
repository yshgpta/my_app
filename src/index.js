import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import App from './scripts/App';
import WeatherApp from './scripts/Weather/WeatherApp'

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/weather" component={WeatherApp}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));

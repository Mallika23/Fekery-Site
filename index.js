import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
import ViewProduct from './Components/ViewProduct'

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <div>
        <Menu />
        
        <Route  exact path="/" component={App}></Route>
        <Route  path="/Home" component={Home}></Route>
        <Route  path="/Contact" component={Contact}></Route>
        <Route  path="/ViewProduct/:id" component={ViewProduct}></Route>
        {/* <Route component={NotFound}></Route> */}
        
        
        
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

 import React from 'react';
// import './App.css'
 import {store} from './ReduxComponents/Store.js'
// //import {mapDispatchtoProps} from './Dispatch.js'
// import {Provider, connect} from 'react-redux'
 import ProductList from './Components/ProductList.js'
import { Provider } from 'react-redux';
import Menu from './Components/Menu'
import Banner from './Components/Banner'


const App=()=>(
  
    <div>
      {/* <Menu /> */}
      <Banner />
      <Provider store={store}>
      <ProductList />
      </Provider>
      
    </div>
  
)




 export default App;



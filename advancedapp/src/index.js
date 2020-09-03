import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './components/ProductTable'

const products=[{category:'Electronics',price:2800 , name:'tv'},
{category:'Clothes',price:4000, name:'chemise'}
]


ReactDOM.render(<ProductTable  prod={products}/>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 1 - Need to wrappe the main app with the Provider
import { Provider } from 'react-redux';
// 2 - Need to create the store to apply it to the provider
import { createStore, applyMiddleware } from 'redux';
// 3 - import all the Reducers
// /!\ We don't need to specify the index file because it's called INDEX
import reducers from './reducers'



// create the function that binds the createStore with the middleware
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  // Connect Redux with React :
  // And pass it the reducers
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
, document.getElementById('root'));



/*
APP => SERVER => REDUX => MIDDLEWARE => Component.js => APP

1 - Action creater is called first
  - Do something... Request the Data !!
  - return an object with a TYPE and a PAYLOAD
2 - This object is going to go to ALL the Reducers and look for the Type
  - Once foud, it will update the state
  - Once the state updated React is going to rerender...
*/

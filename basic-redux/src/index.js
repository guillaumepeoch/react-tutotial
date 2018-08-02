import React from 'react';
import ReactDOM from 'react-dom';
// 1 - Need to wrappe the main app with the Provider
import { Provider } from 'react-redux';
// 2 - Need to create the store to apply it to the provider
import { createStore, applyMiddleware } from 'redux';

const App = function(){
  return (
    <div>
      Hello
    </div>
  );
}

// create the function that binds the createStore with the middleware
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  // Connect Redux with React :
  <Provider store={createStoreWithMiddleware()}>
    <App />
  </Provider>
, document.getElementById('root'));



/*

APP => SERVER => REDUX => MIDDLEWARE => Component.js => APP


*/

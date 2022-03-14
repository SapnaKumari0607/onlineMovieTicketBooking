import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers'
import promiseMiddleware from 'redux-promise';

// create a redux store with our reducer above and middleware
const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

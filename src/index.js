import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch(action.type){
    case "plus" : 
    return state + 1
    case "minus" : 
      return state > 0 ? state - 1 : 0
    case "reset" :
      return 0
    case "1000r" :
      return state + action.sum
    default : 
      return state
  }
}
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
        <App />
  </Provider>
);

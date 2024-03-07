// store.js
import { createStore } from 'redux'
import { quoteReducer } from './reducers/quoteReducer.js';

const store = createStore(quoteReducer);

export default store;

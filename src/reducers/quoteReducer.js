// reducers/quoteReducer.js

import { CHANGE_QUOTE } from '../actions/quoteActions';
import cytaty from '../data/cytaty.js';


const defaultState = {
    quote: cytaty[0]
};

export const quoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_QUOTE:
      return { ...state, quote: action.quote };
    default:
      return state;
  }
};

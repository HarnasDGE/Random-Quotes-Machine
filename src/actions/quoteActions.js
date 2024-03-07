// actions/quoteActions.js
export const CHANGE_QUOTE = 'CHANGE_QUOTE';

export const newQuote = (quote) => {
 return {
  type: CHANGE_QUOTE,
  quote
}
};

import * as currency from '../actions/currency';


export function reducer(state=[], action: currency.CurrencyUpdatedAllAction) {
    switch(action.type) {
        case currency.CURRENCYUPDATEDALL: 
            return action.payload;
        default:
            return state;
    }
}
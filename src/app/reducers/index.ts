
import * as fromAmount from './amount';
import * as fromCurrency from './currency'
import * as amountConversion from './conversion';
import {Currency} from '../models/currency';

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer,
    currencyConversion: amountConversion.reducer
};


export const getAmountState = (state: State) => state.amount;
export const getCurrencyRates = (state: State) => state.currencies;
export const getConversionAmount = (state: State) => state.currencyConversion;

export interface State {
    amount: number;
    currencies: Currency[],
    currencyConversion: number;
}
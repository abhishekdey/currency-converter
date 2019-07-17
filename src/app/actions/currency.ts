import {Action} from '@ngrx/store';
import {Currency} from '../models/currency';


export const CURRENCYUPDATE = '[Currency] UpdateAll';
export const CURRENCYUPDATEDALL = '[Currency] UpdatedAll'

export class CurrencyUpdateAction implements Action {
    type = CURRENCYUPDATE;
}

export class CurrencyUpdatedAllAction implements Action {
    type = CURRENCYUPDATEDALL;
    constructor(public payload: Currency[]) {}
}
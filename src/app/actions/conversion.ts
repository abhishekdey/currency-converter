import {Action} from '@ngrx/store';

export const CONVERSIONAMOUNT = '[Conversion] Amount';

export class ConversionAmountAction implements Action {
    type = CONVERSIONAMOUNT;
    constructor(public payload: number) {}
}
import {Action} from '@ngrx/store';


export const AMTCHANGE = '[Amount] Change';

export class AmountChangeAction implements Action {
    type = AMTCHANGE;
    constructor(public payload: number) {}
}
import * as amount from '../actions/amount';



export function reducer(state: number, action: amount.AmountChangeAction) {
    switch(action.type) {
        case amount.AMTCHANGE: 
        return action.payload;
        
        default:
            return state;
    }
}


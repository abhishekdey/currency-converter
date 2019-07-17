import { CurrencyUpdateAction } from './actions/currency';
import { Currency } from './models/currency';
import { AmountChangeAction } from './actions/amount';
import { ConversionAmountAction} from './actions/conversion';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    public amount$: Observable<number>;
    public toamount: number;
    public currencyRates$: Observable<Currency[]>;
    public amountConversion$: Observable<number>;
    public fromCurrencyCode;
    public toCurrencyCode;
   

    constructor(public store: Store<fromRoot.State>) {
        this.amount$ = store.select(fromRoot.getAmountState);
        this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
        this.amountConversion$ = store.select(fromRoot.getConversionAmount)
    }

    ngOnInit() {
        this.store.dispatch(new CurrencyUpdateAction());
    }

    onAmountChange(amount: string) {
        const number = parseFloat(amount);
        if (!isNaN(number)) {
            this.store.dispatch(new AmountChangeAction(number));
            if(this.fromCurrencyCode && this.toCurrencyCode) {
                this.store.dispatch(new ConversionAmountAction((number * this.toCurrencyCode) / this.fromCurrencyCode ));
            }
        } else {   
            this.store.dispatch(new AmountChangeAction(0));             
            this.store.dispatch(new ConversionAmountAction(0));
        }
    }

    fromCurrencyCodeValuChange(currencyValue) {
        this.fromCurrencyCode = currencyValue;
        this.currencyConversion();
    }

    toCurrencyCodeValuChange(currencyValue) {
        this.toCurrencyCode = currencyValue;
        this.currencyConversion();
    }

    currencyConversion() {
        if(this.fromCurrencyCode && this.toCurrencyCode) {
            let number: number;
            this.amount$.subscribe(amount => {number = amount} );
            if (!isNaN(number)) {
                this.store.dispatch(new ConversionAmountAction((number * this.toCurrencyCode) / this.fromCurrencyCode ));
            } else {                
                this.store.dispatch(new ConversionAmountAction(0));
            }
        }
    }
}

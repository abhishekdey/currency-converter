import { CurrencyUpdatedAllAction } from '../actions/currency';
import { CurrencyService } from './../services/currency.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators'; 
import * as currency from '../actions/currency';

@Injectable()
export class CurrencyEffects {
    @Effect()
    update$: Observable<Action> = this.action$
        .pipe(ofType(currency.CURRENCYUPDATE),
        switchMap(() => this.currencyService
                            .getCurrencyRates()
                            .pipe(map(data => new CurrencyUpdatedAllAction(data)))
        ));

    constructor(
        private currencyService: CurrencyService,
        private action$: Actions
    ) {}
}



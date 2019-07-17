import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './reducers/index';
import {CurrencyEffects} from './effects/currencyeffects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

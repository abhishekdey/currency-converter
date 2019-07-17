import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root'
})


export class CurrencyService {
private url = 'https://api.exchangeratesapi.io/latest';
constructor(private http: HttpClient) {}

    getCurrencyRates(): Observable<any>  {
        return this.http.get(this.url).pipe(map(result => 
            Object.keys(result['rates']).map((key) => {
                return { code: key, value: result['rates'][key] };
            })
        ))
    }
}
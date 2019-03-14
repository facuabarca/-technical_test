import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { IShip, Ship } from '../models/ship.model';
import { Observable } from 'rxjs';


@Injectable()
export class ShipService {
    detail: IShip;
    constructor( private apiService: ApiService ) { }
    
    getShips(page: string): Observable<any> {
        const url: string = `/api/starships/?page=${page.toString()}`;
		return this.apiService.getResponse(url).pipe(
			map((res: any) => ({
                total: res.body.count,
                next: res.body.next ? res.body.next.split('=')[1] : null,
                previous: res.body.previous ? res.body.previous.split('=')[1]: null,
				results: res.body.results.map(e => { return new Ship(e)})
			}))
		);
     }

     setDetail(e: IShip) {
         this.detail = e;
     }
     
     getDetail(){
         return this.detail;
     }
}
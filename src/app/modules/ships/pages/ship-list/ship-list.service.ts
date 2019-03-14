import { Injectable } from '@angular/core';
import { ShipService } from '../../services/ship.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IShip } from '../../models/ship.model';


@Injectable()
export class ShipListService {
    public ships: BehaviorSubject<IShip[]> = new BehaviorSubject<IShip[]>(null);

    constructor( private shipService: ShipService ) { 
        this.ships.asObservable();
    }

    // getShips(): Observable<any> {
    //     // return this.shipService.getShips(this.page).pipe((tap)=> {});
    // }
    
}
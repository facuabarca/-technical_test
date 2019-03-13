import { Injectable } from '@angular/core';
import { ShipService } from '../../services/ship.service';
import { Observable, Subject } from 'rxjs';
import { IShip } from '../../models/ship.model';


@Injectable()
export class ShipListService {
    page: string = '1';
    public ships = new Subject<IShip>();

    constructor( private shipService: ShipService ) { 
        this.ships.asObservable();
    }
     

    getShips(): void {
        this.shipService.getShips(this.page).subscribe((res)=> {
            this.getPagination(res.previous, res.next);
            this.ships = res.results
        });
    }

    getPagination(previous, next): void {
        
    }
    
}
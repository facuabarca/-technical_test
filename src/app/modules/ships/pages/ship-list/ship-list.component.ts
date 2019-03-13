import { Component, OnInit } from "@angular/core";
import { ShipListService } from "./ship-list.service";
import { Observable } from 'rxjs';
import { IShip } from '../../models/ship.model';

@Component({
  selector: "app-ship-list",
  templateUrl: "./ship-list.component.html",
  styleUrls: ["./ship-list.component.scss"],
  providers: [ ShipListService ]
})
export class ShipComponent implements OnInit {
  constructor(private shipListService: ShipListService) {}
  
  get ships(): Observable<IShip> {
		return this.shipListService.ships;
	}

  ngOnInit() {
    this.shipListService.getShips();

    setTimeout(()=> {
      console.log('ships:: ', this.ships);
    },2000)
  }
}

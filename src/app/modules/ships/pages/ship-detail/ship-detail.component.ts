import { Component, OnInit } from "@angular/core";

import { ShipService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: "app-ship-detail",
  templateUrl: "./ship-detail.component.html",
  styleUrls: ["./ship-detail.component.scss"]
})
export class ShipDetailComponent implements OnInit {

  constructor(private shipService: ShipService, private router: Router) {}
  

  ngOnInit() {
    
  }

  goBack(): void {
    this.router.navigate([ '/dashboard/ships', { skipLocationChange: true } ]);
  }
}

import { Component, OnInit } from "@angular/core";

import { ShipService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: "app-ship-detail",
  templateUrl: "./ship-detail.component.html",
  styleUrls: ["./ship-detail.component.scss"]
})
export class ShipDetailComponent implements OnInit {
    detail: any;
  constructor(private shipService: ShipService, private router: Router) {}
  

  ngOnInit() {
    this.detail = this.shipService.getDetail();
    console.log('detalle modal::', this.detail);
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}

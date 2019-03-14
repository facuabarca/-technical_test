import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShipService } from '../../services';
import { ShipDetailComponent } from '../ship-detail/ship-detail.component';
import { IShip } from '../../models/ship.model';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services';

@Component({
  selector: "app-ship-list",
  templateUrl: "./ship-list.component.html",
  styleUrls: ["./ship-list.component.scss"]
})
export class ShipListComponent implements OnInit {
  page: string = '1'
  selector: string = '.main-panel';
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = 'down';
  throttle = 900;
  loader$: Observable<boolean>;

  result: IShip[] = [];
  constructor(private shipService: ShipService, private router: Router, private modalService: NgbModal, private loaderService: LoaderService) {}
  

  ngOnInit() {
    this.loader$ = this.loaderService.isLoading;
    this.shipService.getShips(this.page).subscribe((res:any) => {
      this.result = res.results;
      this.page = res.next;
    });
  }

  onScrollDown () {
    if(this.page){
      this.shipService.getShips(this.page).subscribe((res:any) => {
        this.page = res.next;
        this.result = this.result.concat(res.results);
      });
    }
  }

  openModal(i: IShip) {
    this.shipService.setDetail(i);
    this.modalService.open(ShipDetailComponent);
  }
}

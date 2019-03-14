import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ShipService } from '../../services';

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

  result: any[] = [];
  constructor(private shipService: ShipService, private router: Router) {}
  

  ngOnInit() {
    this.shipService.getShips(this.page).subscribe((val:any) => {
      this.result = val.results;
      this.page = val.next;
    });
  }

  addItems(startIndex, endIndex, _method) {
    
  }

  onScrollDown (ev) {
    if(this.page){
      this.shipService.getShips(this.page).subscribe((val:any) => {
        this.page = val.next;
        this.result = this.result.concat(val.results);
      });
    }
  }

  detail(i): void {
    this.shipService.setDetail(i);
    // this.router.navigate([ '/dashboard', 'ships', 15 ]);
  }
}

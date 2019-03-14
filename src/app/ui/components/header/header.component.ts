import { Component } from "@angular/core";
import { CacheService } from 'src/app/core/services';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {

  constructor(private cacheService: CacheService) {

  }
  logout(): void {
    this.cacheService.clear('userAuth');
  }
}

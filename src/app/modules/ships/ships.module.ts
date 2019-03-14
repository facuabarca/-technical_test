import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ShipsRoutingModule } from "./ships.routing";

import { ShipsComponent } from "./ships.component";

import { PAGES } from "./pages/index";
import { SERVICES } from './services/index';

@NgModule({
  declarations: [ShipsComponent, ...PAGES],
  imports: [CommonModule, ShipsRoutingModule, InfiniteScrollModule],
  providers: [ ...SERVICES ]
})
export class ShipsModule {}


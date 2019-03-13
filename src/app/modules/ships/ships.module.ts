import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShipsRoutingModule } from "./ships.routing";

import { ShipsComponent } from "./ships.component";

import { PAGES } from "./pages/index";
import { SERVICES } from './services/index';

@NgModule({
  declarations: [ShipsComponent, ...PAGES],
  imports: [CommonModule, ShipsRoutingModule],
  providers: [ ...SERVICES ]
})
export class ShipsModule {}


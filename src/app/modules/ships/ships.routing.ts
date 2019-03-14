import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShipsComponent } from "./ships.component";
import * as pages from "./pages";

const ROUTES_SHIPS: Routes = [
  {
    path: "",
    component: ShipsComponent,
    children: [
      {
        path: "",
        component: pages.ShipListComponent
      },
      {
        path: ":id",
        component: pages.ShipDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES_SHIPS)],
  exports: [RouterModule]
})
export class ShipsRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

const ROUTES_DASHBOARD: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "ships",
        pathMatch: "full"
      },
      {
        path: "ships",
        loadChildren: "./ships/ships.module#ShipsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES_DASHBOARD)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

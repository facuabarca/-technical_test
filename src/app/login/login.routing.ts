import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import * as pages from "./pages";

const ROUTES_DASHBOARD: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "",
        component: pages.SingInComponent
      },
      {
        path: "register",
        component: pages.RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES_DASHBOARD)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

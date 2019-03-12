import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { PAGES } from "./pages";
import { DashboardRoutingModule } from "./login.routing";

@NgModule({
  declarations: [LoginComponent, ...PAGES],
  imports: [CommonModule, DashboardRoutingModule],
  providers: []
})
export class LoginModule {}

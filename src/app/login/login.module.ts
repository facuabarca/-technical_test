import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from "./login.component";
import { PAGES } from "./pages";
import { DashboardRoutingModule } from "./login.routing";

@NgModule({
  declarations: [LoginComponent, ...PAGES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule],
  providers: []
})
export class LoginModule {}

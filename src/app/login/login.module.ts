import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from "./login.component";
import { PAGES } from "./pages";
import { DashboardRoutingModule } from "./login.routing";
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent, ...PAGES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule, CoreModule],
  providers: [CoreModule]
})
export class LoginModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from "./login.component";
import { PAGES } from "./pages";
import { DashboardRoutingModule } from "./login.routing";
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ...PAGES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule, CoreModule, SharedModule],
  providers: [CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}

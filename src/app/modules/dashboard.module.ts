import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { UiModule } from '../ui/ui.module';

@NgModule({
	declarations: [ DashboardComponent ],
	imports: [ CommonModule, DashboardRoutingModule, UiModule ]
})
export class DashboardModule {}

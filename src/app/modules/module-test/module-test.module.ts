import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTestRoutingModule } from './module-test.routing';

import { ModuleTestComponent } from './module-test.component';

@NgModule({
	declarations: [ ModuleTestComponent ],
	imports: [ CommonModule, ModuleTestRoutingModule ]
})
export class TestModule {}

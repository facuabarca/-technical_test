import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleTestComponent } from './module-test.component';

const ROUTES_MODULETEST: Routes = [
	{
		path: '',
		component: ModuleTestComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES_MODULETEST) ],
	exports: [ RouterModule ]
})
export class ModuleTestRoutingModule {}

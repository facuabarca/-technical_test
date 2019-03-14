import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { COMPONENTS } from './components/index';

@NgModule({
	declarations: [ ...COMPONENTS ],
	imports: [ CommonModule, RouterModule ],
	exports: [ ...COMPONENTS ]
})
export class UiModule {}

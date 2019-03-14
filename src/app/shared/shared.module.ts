import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMPONENTS } from './components/index';

@NgModule({
	declarations: [ ...COMPONENTS ],
	imports: [ CommonModule ],
	exports: [ ...COMPONENTS ]
})
export class SharedModule {}

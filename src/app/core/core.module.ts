import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_SERVICES } from './http';
import { SERVICES } from './services';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [ ...HTTP_SERVICES, ...SERVICES ],
})
export class CoreModule {}
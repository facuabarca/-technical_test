import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_SERVICES } from './http';
import { SERVICES } from './services';
import { GUARDS } from './guards';
import { INTERCEPTORS } from './interceptors';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [ ...HTTP_SERVICES, ...SERVICES, ...GUARDS, ...INTERCEPTORS ],
})
export class CoreModule {}
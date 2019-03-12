import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_SERVICES } from './http';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [ ...HTTP_SERVICES ],
})
export class CoreModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ShipsRoutingModule } from './ships.routing';

import { ShipsComponent } from './ships.component';

import { SharedModule } from '../../shared/shared.module';

import { PAGES, ShipDetailComponent } from './pages/index';
import { SERVICES } from './services/index';

@NgModule({
	declarations: [ ShipsComponent, ...PAGES ],
	imports: [ CommonModule, ShipsRoutingModule, InfiniteScrollModule, NgbModule.forRoot(), SharedModule ],
	providers: [ ...SERVICES, NgbActiveModal ],
	entryComponents: [ ShipDetailComponent ]
})
export class ShipsModule {}

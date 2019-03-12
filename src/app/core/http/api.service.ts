import { Injectable, Injector } from '@angular/core';

import * as env from '../../../environments/global/global'
import { BaseService } from './base.service';

@Injectable()
export class ApiService extends BaseService {
	constructor(injector: Injector) {
		super(injector);
	}

	getUrl(url): string {
		return `${env.envBase.api}/${url}`;
	}
}

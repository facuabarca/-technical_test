import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderInterceptor } from './loader.interceptor';

export const INTERCEPTORS = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: LoaderInterceptor,
		multi: true
	}
];

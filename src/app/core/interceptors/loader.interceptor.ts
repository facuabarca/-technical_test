import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter, finalize } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	private requests: HttpRequest<any>[] = [];

	constructor(private loaderService: LoaderService) {}

	removeRequest(req: HttpRequest<any>) {
		const i = this.requests.indexOf(req);
		this.requests.splice(i, 1);
		this.loaderService.isLoading.next(this.requests.length > 0);
		
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.requests.push(req);
		this.loaderService.isLoading.next(true);

		return next
			.handle(req)
			.pipe(
				filter((event) => event instanceof HttpResponse),
				tap(() => this.removeRequest(req)),
				finalize(() => this.removeRequest(req))
			);
	}
}

import { Injector } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';



export abstract class BaseService {
	private http: HttpClient;

	constructor(private injector: Injector) {
		this.http = this.injector.get(HttpClient);
	}

	getResponse<T>(url: string): Observable<HttpResponse<T>> {
		const http: Observable<HttpResponse<T>> = this.http
			.get<T>(this.getUrl(url), { observe: 'response' })
		return this.handleTimeout<HttpResponse<T>>(http);
	}

	private handleTimeout<T>(observable: Observable<T>): Observable<T> {
		return observable.pipe(
			catchError((error: any) => {
				if (error.name && error.name === 'TimeoutError') {
					alert('Tiempo de espera agotado.')
					return empty();
				} else {
					return throwError(error);
				}
			})
		);
	}

	abstract getUrl(url: string): string;
}

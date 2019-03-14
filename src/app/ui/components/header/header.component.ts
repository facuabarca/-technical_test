import { Component } from '@angular/core';
import { CacheService } from 'src/app/core/services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
	constructor(private cacheService: CacheService, private router: Router) {}
	logout(): void {
		this.cacheService.clear('userAuth');
		this.router.navigate([ 'login' ]);
	}
}

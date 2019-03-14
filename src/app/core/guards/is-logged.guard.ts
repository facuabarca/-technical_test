import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { CacheService } from '../services';

@Injectable()
export class IsLoggedGuard implements CanActivate, CanLoad {
	constructor(private router: Router, private cacheService: CacheService) {}

	canLoad(): boolean {
		const isLogged: boolean = this.checkUserLogged();
		if (!isLogged) {
			this.router.navigate([ '/login' ]);
		}
		return isLogged;
	}

	canActivate(): boolean {
		return this.checkUserLogged();
	}

	private checkUserLogged(): boolean {
		const user: any = this.cacheService.get('userAuth') ? this.cacheService.get('userAuth') : false;
		if (user.isAuth) return true;
		else return false;
	}
}

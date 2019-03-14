import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from '../../../core/services';
import { IUserModel, UserAuth } from '../../../core/models';

@Injectable()
export class SignInService {
	private userAuth: UserAuth;
	typeAlert: string = 'alert-success';
	messageAlert: string = '';
	showAlert: boolean = false;
	constructor(private cacheService: CacheService, private router: Router) {}

	login(user: IUserModel): void {
		if (this.cacheService.get('users')) {
			let users: IUserModel[] = this.cacheService.get('users');
			const userExists: IUserModel = users.find((item) => {
				return item.email === user.email && item.password === user.password;
			});
			if (userExists) {
				this.userAuth = new UserAuth(user.email, true);
				this.cacheService.set('userAuth', this.userAuth);
				setTimeout(() => {
					this.router.navigate([ 'dashboard' ]);
				}, 1000);
			} else {
				this.messageAlert = 'Usuario o contraseña incorrectos';
				this.typeAlert = 'alert-danger';
				this.showAlert = true;
			}
		} else {
			this.messageAlert = 'Usuario o contraseña incorrectos';
			this.typeAlert = 'alert-danger';
			this.showAlert = true;
		}
	}
}

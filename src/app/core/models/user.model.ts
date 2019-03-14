export interface IUserModel {
	nombre?: string;
	email: string;
	password: string;
}

export class UserAuth {
	email: string;
	isAuth: boolean;
	constructor(email: string, isAuth: boolean) {
		this.email = email;
		this.isAuth = isAuth;
	}
}

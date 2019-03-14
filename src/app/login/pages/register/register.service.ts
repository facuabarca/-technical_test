
import { Injectable,  } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CacheService } from 'src/app/core/services';
import { IUserModel } from 'src/app/core/models';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {
  typeAlert: string = 'alert-success';
  messageAlert: string = '';
  showAlert: boolean = false;
	constructor(
        private fb: FormBuilder,
        private cacheService: CacheService,
        private router: Router
    ) {}
    
    sonIguales(campo1: string, campo2: string) {
        return( group: FormGroup) => {
          const pass1 = group.controls[campo1].value;
          const pass2 = group.controls[campo2].value;
          if ( pass1 === pass2 ) {
            return null;
          }
          return  {
            sonIguales: true
          };
        };
    }

	buildForm(): FormGroup {
		const formGroup: FormGroup = this.fb.group({
            nombre: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
            password2: new FormControl(null, Validators.required),
          }, { validators: this.sonIguales('password', 'password2') });
		return formGroup;
    }
    
    registerUser(user: IUserModel ): void {
        if(this.cacheService.get('users')) {
            let users: IUserModel[] = this.cacheService.get('users');
            const userExists: IUserModel = users.find(item => {
                return item.email === user.email;
              })
            if(userExists) {
                this.messageAlert = 'El usuario ya existe.';
                this.typeAlert = 'alert-danger';
                this.showAlert = true;
            } else {
                users.push(user);
                this.cacheService.set('users', users);
                this.messageAlert = 'Usuario creado correctamente';
                this.typeAlert = 'alert-success';
                this.showAlert = true;
                this.redirectLogin();
            }
        } else {
            let users: IUserModel[] = [user];
            this.cacheService.set('users', users);
            this.messageAlert = 'Usuario creado correctamente';
            this.typeAlert = 'alert-success';
            this.showAlert = true;
            this.redirectLogin();
        }
    }
    redirectLogin(): void {
      setTimeout(() => {
        this.router.navigate(['login']);
      },2500);
    }
    }


import { Injectable,  } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CacheService } from 'src/app/core/services';
import { IUserModel } from 'src/app/core/models';


@Injectable()
export class RegisterService {
	constructor(
        private fb: FormBuilder,
        private cacheService: CacheService
    ) {}
    
    sonIguales(campo1: string, campo2: string) {
        return( group: FormGroup) => {
          let pass1 = group.controls[campo1].value;
          let pass2 = group.controls[campo2].value;
    
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
        
        
    }
}

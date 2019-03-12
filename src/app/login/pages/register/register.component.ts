import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
  providers: [ RegisterService ],
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    init_plugins();
    this.forma = this.registerService.buildForm();
  }

  registrarUsuario(): void {
    this.registerService.registerUser(this.forma.value);
  }


}

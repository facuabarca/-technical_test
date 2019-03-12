import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { IUserModel } from 'src/app/core/models';
import { SignInService } from './sign-in.service';

@Component({
  selector: "app-sing-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  providers: [ SignInService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingInComponent {
  constructor(private signInService: SignInService) {}

  ingresar(forma: NgForm): void {
   this.signInService.login(forma.value)
  }
}

import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { IUserModel } from 'src/app/core/models';

@Component({
  selector: "app-sing-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingInComponent {
  user: IUserModel;
  constructor() {
    
   }

  ingresar(forma: NgForm): void {
   this.user = forma.value;

  }
}

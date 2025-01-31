import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-default-form-user',
  imports: [
    HomeComponent,
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './default-form-user.component.html',
  styleUrl: './default-form-user.component.scss'
})
export class DefaultFormUserComponent {

  @Input () formTitle! : string;
  @Input () formAction! : FormGroup;
  @Input () formFunc! : () => void;

  constructor(private route : Router){}

  submitForm(){
    if (this.formAction.valid) {
      this.formFunc();  // Executa a função passada
    }
  }

  navigate(){
    this.route.navigate(["/app-user-list"]);
  }
  

}

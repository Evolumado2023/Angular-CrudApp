import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InputComponent } from '../input/input.component';

interface CreateUser {
  nome: FormControl<string>;
  idade: FormControl<number>;
}

@Component({
  selector: 'app-create-user',
  imports: [
    HomeComponent,
    ReactiveFormsModule,
    InputComponent
  ],
  providers: [
    UsuarioService
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  createUserForm : FormGroup<CreateUser>;

  constructor(
    private route : Router,
    private userService : UsuarioService,
    private toastService : ToastrService
  ){
    this.createUserForm = new FormGroup<CreateUser>({
      nome: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
      idade: new FormControl(null!, { nonNullable: true, validators: [Validators.required] })
    });
  }

  submit() {
    if (this.createUserForm.valid) {
      this.userService.saveUser(this.createUserForm.value) // Correção aqui
        .subscribe({
          next: () => {
            this.toastService.success("Usuário registrado com sucesso!");
            this.createUserForm.reset();
            this.route.navigate(["/app-user-list"]);
          },
          error: () => this.toastService.error("Erro inesperado")
        });
    } else {
      this.toastService.error("Preencha os campos corretamente!");
    }
  }

  navigate(){
    this.route.navigate(["/app-user-list"]);
  }
}

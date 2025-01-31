import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InputComponent } from '../input/input.component';
import { DefaultFormUserComponent } from '../default-form-user/default-form-user.component';

@Component({
  selector: 'app-create-user',
  imports: [
    DefaultFormUserComponent
  ],
  providers: [
    UsuarioService
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  formTitle = 'Criar Usuário';

  createUserForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required])
  });

  constructor(
    private route : Router,
    private userService : UsuarioService,
    private toastService : ToastrService
  ){}

  submitUser() {
    this.userService.saveUser(this.createUserForm.value).subscribe({
      next: () => {
        this.toastService.success('Usuário registrado com sucesso!');
        this.route.navigate(['/app-user-list']);
      },
      error: () => this.toastService.error('Erro ao salvar usuário!')
    });
  }
}

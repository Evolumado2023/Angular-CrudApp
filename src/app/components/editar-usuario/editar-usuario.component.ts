import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { InputComponent } from '../input/input.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-usuario',
  imports: [
    HomeComponent,
    ReactiveFormsModule,
    InputComponent
  ],
  providers : [
    UsuarioService
  ],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.scss'
})
export class EditarUsuarioComponent {

  editUserForm : FormGroup;

  constructor (
    private route : ActivatedRoute,
    private userService : UsuarioService,
    private router : Router,
    private toastService : ToastrService
  ){
    this.editUserForm = new FormGroup({
      nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade : new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    const userId = this.route.snapshot.params['id']; // Pega o ID da URL
    this.userService.getUserById(userId).subscribe(user => {
      this.editUserForm.patchValue(user);
    });
  }

  atualizarUsuario() {
    if (this.editUserForm.valid) {
      const userId = this.route.snapshot.params['id'];
      this.userService.updateUser(userId, this.editUserForm.value).subscribe({
        next: () => {
          this.toastService.success("Usuário atualizado com sucesso!");
          this.router.navigate(['/app-user-list']);
        },
        error: () => this.toastService.error("Erro ao atualizar usuário")
      });
    } else {
      this.toastService.error("Preencha os campos corretamente!");
    }
  }

  navigate(){
    this.router.navigate(["/app-user-list"]);
  }

}

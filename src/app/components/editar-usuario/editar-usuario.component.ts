import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { DefaultFormUserComponent } from '../default-form-user/default-form-user.component';

@Component({
  selector: 'app-editar-usuario',
  imports: [
    DefaultFormUserComponent,
  ],
  providers : [
    UsuarioService
  ],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.scss'
})
export class EditarUsuarioComponent implements OnInit {

  formTitle = 'Editar Usuário';

  editUserForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required])
  });

  userId! : number;

  constructor (
    private route : ActivatedRoute,
    private userService : UsuarioService,
    private router : Router,
    private toastService : ToastrService
  ){}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.userId).subscribe(user => {
      this.editUserForm.setValue({
        nome: user.nome,
        idade: user.idade
      });
    });
  }

  updateUser() {
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

}

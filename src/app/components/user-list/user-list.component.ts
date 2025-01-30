import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  imports: [
    HomeComponent,
    CommonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{

  usuarios: any[] = []; // Armazena os usuários carregados

  constructor(
    private usuarioService: UsuarioService,
    private route : Router,
    private toastService : ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usuarioService.getAllUsers().subscribe({
      next: (data) => {
        this.usuarios = data; // Preenche a lista de usuários
      },
      error: (error) => {
        console.error('Erro ao carregar os usuários:', error);
      }
    });
  }

  navigate(){
    this.route.navigate(["/app-create-user"]);
  }

  // navegar para editar um user
  editarUsuario(user : any ){
    this.route.navigate(['/app-editar-usuario', user.id]);
  }

  // excluir usuário
  excluirUsuario( userId : number) {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
      this.usuarioService.deleteUser(userId).subscribe({
        next: () => {
          this.toastService.success("Usuário excluído com sucesso!");
          this.getAllUsers(); // Recarrega a lista
        },
        error: () => this.toastService.error("Erro ao excluir usuário")
      });
    }
  }


}

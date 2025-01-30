import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    private route : Router
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

}

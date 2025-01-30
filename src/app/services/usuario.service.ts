import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8084/usuario';

  constructor( private http : HttpClient) { }

  // Método para buscar todos os usuários
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/allUsers`);
  }

  // 🔹 Buscar um usuário por ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/userById/${id}`);
  }

  // Método para salvar um usuário
  saveUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/saveUser`, user);
  }

  // 🔹 Editar usuário
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateUsuario/${id}`, user);
  }

  // 🔹 Excluir usuário
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteUsuario/${id}`);
  }
}

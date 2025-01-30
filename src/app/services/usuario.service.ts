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

  // Método para salvar um usuário
  saveUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/saveUser`, user);
  }
}

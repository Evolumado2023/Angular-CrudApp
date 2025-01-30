import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

export const routes: Routes = [
    {
        path: "app-user-list",
        component: UserListComponent
    },
    {
        path: "app-create-user",
        component: CreateUserComponent
    },
    {
        path: "app-editar-usuario/:id",
        component: EditarUsuarioComponent
    },
    { 
        path: '', 
        redirectTo: '/app-user-list', 
        pathMatch: 'full' 
    }
];

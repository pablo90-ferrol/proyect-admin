import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { ProyectoDetailComponent } from './proyecto-detail/proyecto-detail.component';
import {TareaDetailComponent } from './tarea-detail/tarea-detail.component';

const routes: Routes = [
  {path: 'proyectos', component: ProyectoListComponent},
  {path: 'proyectos/:id', component: ProyectoDetailComponent},
  {path: 'tareas', component: TareasListComponent},
  {path: 'tareas/:id', component: TareaDetailComponent},
  {path: 'usuarios', component: UsuariosListComponent},
  {path: 'roles', component: RolesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
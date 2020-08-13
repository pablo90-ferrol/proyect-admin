import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProyectoDetailComponent } from './proyecto-detail/proyecto-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TareaDetailComponent } from './tarea-detail/tarea-detail.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { RolesDetailComponent } from './roles-detail/roles-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoListComponent,
    TareasListComponent,
    UsuariosListComponent,
    RolesListComponent,
    ProyectoDetailComponent,
    TareaDetailComponent,
    UsuariosDetailComponent,
    RolesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

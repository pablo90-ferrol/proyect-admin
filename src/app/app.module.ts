import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoListComponent,
    TareasListComponent,
    UsuariosListComponent,
    RolesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

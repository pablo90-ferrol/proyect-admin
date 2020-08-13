import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {

  tareaForm = this.fb.group({
    nombre: [null, Validators.required],
    proyectoId: null,
    fechaInicio: [null, Validators.required],
    fechaFin: null,
    fechaVencimiento: null,
  })

  id = undefined;
  proyectos = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== "_nueva") {
        this.http.get<any>(environment.apiBaseUrl + "tareas/" + params.id)
          .subscribe(
            proyecto => {
              this.tareaForm.patchValue(proyecto);
              this.id = proyecto.id;
            },
            error => {
              alert("No se pudo cargar la tarea");
            }
          )
      }
    })

    // Obtención de los proyectos de la API para el selector de proyecto
    this.http.get<any[]>(environment.apiBaseUrl + "proyectos")
    .subscribe(
      proyectos => {
        this.proyectos = proyectos;
      }
    )
  }

  crear() {
    this.http.post<any>(environment.apiBaseUrl + "tareas", this.tareaForm.value)
      .subscribe(
        tarea => {
          alert("Tarea creada con éxito con id=" + tarea.id);
          this.router.navigate(["tareas"]);
        },
        error => {
          alert("Error creando la tarea: " + error.message)
        })
  }

  modificar() {
    this.http.put<any>(
      environment.apiBaseUrl + "tareas/" + this.id, 
      this.tareaForm.value)
    .subscribe(
      tarea => {
        alert("Tarea actualizada");
        this.router.navigate(["tareas"]);
      },
      error => {
        alert("Error actualizando tareas: " + error.message);
      }
    )
  }

  eliminar() {
    if (confirm("¿Está seguro?")) {
      this.http.delete<any>(environment.apiBaseUrl + "tareas/" + this.id)
      .subscribe(
        () => {
          alert("Tarea eliminada con éxito.");
          this.router.navigate(["tareas"]);
        },
        error => {
          alert("Error eliminando la tarea: " + error.message);
        }
      )
    }
  }
}
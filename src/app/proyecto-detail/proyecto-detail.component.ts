import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.css']
})
export class ProyectoDetailComponent implements OnInit {

  proyectoForm = this.fb.group({
    nombre: [null, Validators.required],
    descripcion: null,
    fechaInicio: [null, Validators.required],
    fechaFin: null
  })

  id = undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== "_nuevo") {
        this.http.get<any>(environment.apiBaseUrl + "proyectos/" + params.id)
          .subscribe(
            proyecto => {
              this.proyectoForm.patchValue(proyecto);
              this.id = proyecto.id;
            },
            error => {
              alert("No se pudo cargar el proyecto");
            }
          )
      }
    })
  }

  crear() {
    this.http.post<any>(environment.apiBaseUrl + "proyectos", this.proyectoForm.value)
      .subscribe(
        proyecto => {
          alert("Proyecto creado con éxito con id=" + proyecto.id);
          this.router.navigate(["proyectos"]);
        },
        error => {
          alert("Error creando el proyecto: " + error.message)
        })
  }

  modificar() {
    this.http.put(
      environment.apiBaseUrl + "proyectos/" + this.id,
      this.proyectoForm.value)
    .subscribe(
      proyecto => {
        alert("Proyecto actualizado");
        this.router.navigate(["proyectos"]);
      },
      error => {
        alert("Error actualizando proyecto: " + error.message);
      }
    )
  }

  eliminar() {
    if (confirm("¿Está seguro?")) {
      this.http.delete<any>(environment.apiBaseUrl + "proyectos/" + this.id)
      .subscribe(
        () => {
          alert("Proyecto eliminado con éxito.");
          this.router.navigate(["proyectos"]);
        },
        error => {
          alert("Error eliminado el proyecto: " + error.message);
        }
      )
    }
  }

}
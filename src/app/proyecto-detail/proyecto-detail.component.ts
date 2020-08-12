import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  crear() {
    this.http.post<any>(environment.apiBaseUrl + "proyectos", this.proyectoForm.value)
      .subscribe(
        proyecto => {
          alert("Proyecto creado con éxito con id=" + proyecto.id)
        },
        error => {
          alert("Error creando el proyecto: " + error.message)
        })
  }
}
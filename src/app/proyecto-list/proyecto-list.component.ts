import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit {
  proyectos = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/proyectos")
    .subscribe(proyectos => {
      this.proyectos = proyectos;
    })
  }

}

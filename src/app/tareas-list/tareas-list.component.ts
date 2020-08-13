import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit {

  tareas = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(environment.apiBaseUrl + "tareas")
    .subscribe(tareas => {
      this.tareas = tareas;
    })
  }

}
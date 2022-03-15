import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.sass']
})
export class CategoriaComponent implements OnInit {
  datos:any
  constructor(private services: ServiciosService) { 
    this.services.Categoria().subscribe(data=>this.datos = data)
  }

  ngOnInit(): void {
  }

}

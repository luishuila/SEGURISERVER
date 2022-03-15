import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listformu',
  templateUrl: './listformu.component.html',
  styleUrls: ['./listformu.component.sass']
})
export class ListformuComponent implements OnInit {
  inputseach = "" ;
  datos:any = []
  constructor( private services:ServiciosService){
    this.services.ProductoGet().subscribe((data:any)=>{
      this.datos = data
     console.log(data)
    })
   }

  ngOnInit(): void {
  }

  eliminar(id:any){
    this.services.ProductoDelete(id).subscribe((data:any)=>{
 
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      })
      this.services.ProductoGet().subscribe((data:any)=>{
        this.datos = data
       console.log(data)
      })
    },(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message,
      })
    })
  }
}

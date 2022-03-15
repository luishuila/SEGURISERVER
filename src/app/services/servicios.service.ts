import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }




  CategoriaGet(){
    return this.http.get(`${environment.apiUrl}categoria`)
  }
  ProductoGet(){
    return this.http.get(`${environment.apiUrl}productos`)
  }
  ProductoPost(data:any){
    return this.http.post(`${environment.apiUrl}productos`,data)
  }
  ProductoEdit(id:any){
    return this.http.get(`${environment.apiUrl}productos/${id}/edit`)
  }
  ProductoPush(id:any,data:any){
    return this.http.put(`${environment.apiUrl}productos/${id}`,data)
  }
  ProductoDelete(id:any){
    return this.http.delete(`${environment.apiUrl}productos/${id}`)
  }
///////////
Categoria(){
  return this.http.get(`${environment.apiUrl}categoria/create`)
}

  home(){
    return this.http.get(`${environment.apiUrl}home`)
  }




}

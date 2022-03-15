import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { ListformuComponent } from './listformu/listformu.component';
import { SaveComponent } from './save/save.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { VerproductoComponent } from './verproducto/verproducto.component';
import { BuscarPipe } from './pipe/buscar.pipe';
import { CategoriaComponent } from './categoria/categoria.component';



const componetes = [

    //////////////////////////
    ListformuComponent,
    SaveComponent,
    ActualizarComponent,
    VerproductoComponent,
    CategoriaComponent,
]
@NgModule({
  declarations: [
    componetes,
    ActualizarComponent,
    BuscarPipe,
  

   
 

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports:[componetes]
})
export class PagesModule { }

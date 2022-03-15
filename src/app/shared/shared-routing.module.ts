import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { ActualizarComponent } from "../pages/actualizar/actualizar.component";
import { CategoriaComponent } from "../pages/categoria/categoria.component";
import { ListformuComponent } from "../pages/listformu/listformu.component";
import { SaveComponent } from "../pages/save/save.component";

import { VerproductoComponent } from "../pages/verproducto/verproducto.component";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },

  {
    path: "producto",
    component: ListformuComponent,
  },
  { path: "actualizar/:id", component:  ActualizarComponent },
  { path: "guarda", component: SaveComponent },
  { path: "ver/:id", component:  VerproductoComponent },
  {path : "categoria", component:  CategoriaComponent},
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class SharedRoutingModule {}

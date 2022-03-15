import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ServiciosService } from "src/app/services/servicios.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-actualizar",
  templateUrl: "./actualizar.component.html",
  styleUrls: ["./actualizar.component.sass"],
})
export class ActualizarComponent implements OnInit {
  datos: any;

  formu: any = FormGroup;
  categoria: any = [];
  cargadoDes = false;
  id: any;
  constructor(
    public fb: FormBuilder,
    private services: ServiciosService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((datos) => (this.id = datos.id));
    this.formu = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3) ]],
      slug: ["", [Validators.required, Validators.minLength(3)]],
      descripcion: [""],
      categoria_id: ["", [Validators.required]],
      precio: ["", [Validators.required]],
    });
    this.services.CategoriaGet().subscribe((data: any) => {
      this.categoria = data;
      console.log(data);
    });

  }
  getErrornumero(element: string): any {
    if (this.formu.get(element).invalid && this.formu.get(element).touched) {
      if (this.formu.get(element).errors.pattern) {
        return `el campo no se permiten caracteres especiales`;
      }

      if (this.formu.get(element).errors.min) {
        return `el campo  se requiere un  mínimo  ${
          this.formu.get(element).errors.min.min
        }  `;
      }
      if (this.formu.get(element).errors.max) {
        return `el campo se requiere un máximo   ${
          this.formu.get(element).errors.max.max
        }  `;
      }
      if (this.formu.get(element).errors.maxlength) {
        return `el campo  requiere un máximo de ${
          this.formu.get(element).errors.maxlength.requiredLength
        } caracteres, caracteres actual ${
          this.formu.get(element).errors.maxlength.actualLength
        } `;
      }

      if (this.formu.get(element).errors.required) {
        return "el campo es obligatorio";
      }
    }
  }
  getError(element: string): any {
    if (this.formu.get(element).invalid && this.formu.get(element).touched) {
      if (this.formu.get(element).errors.pattern) {
        return `comprueba que un email es válido`;
      }
      if (this.formu.get(element).errors.required) {
        return "el campo es obligatorio";
      }

      if (this.formu.get(element).errors.minlength) {
        return `el campo requiere un mínimo de ${
          this.formu.get(element).errors.minlength.requiredLength
        } caracteres, caracteres actual ${
          this.formu.get(element).errors.minlength.actualLength
        } `;
      }
      if (this.formu.get(element).errors.maxlength) {
        return `el campo requiere un máximo de ${
          this.formu.get(element).errors.maxlength.requiredLength
        } caracteres, caracteres actual ${
          this.formu.get(element).errors.maxlength.actualLength
        } `;
      }
    }
  }

  ngOnInit(): void {
    this.services.ProductoEdit(this.id).subscribe((data: any) => {
      
      this.formu.patchValue({
        nombre: data.nombre,
        slug: data.slug,
        descripcion: data.descripcion,
        categoria_id: data.categoria_id,
        precio: data.precio,
      }),
        console.log(data);
    });
    
  }

  actualizar() {
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }
    const data = {
      nombre: this.formu.get("nombre").value,
      slug: this.formu.get("slug").value,
      descripcion: this.formu.get("descripcion").value,
      categoria_id: this.formu.get("categoria_id").value,
      precio: this.formu.get("precio").value,
    };
    this.services.ProductoPush(this.id, data).subscribe(
      (data: any) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message,
        });
      }
    );
  }
}

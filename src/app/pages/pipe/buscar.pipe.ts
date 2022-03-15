import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (args.length > 0) {
      const txt = args.toLowerCase()
      let datos
      datos = value.filter((datos: any) => {
      
        return datos.nombre.toString().toLowerCase().includes(txt)
         // || (datos.fecha_asignacion ? datos.fecha_asignacion : '').toLowerCase().includes(txt)
          || datos.descripcion.toString().toLowerCase().includes(txt)
          || datos.slug.toLowerCase().includes(txt)
          || datos.categoria.toLowerCase().includes(txt)
          || datos.precio.toString().toLowerCase().includes(txt)
      }

      )

      return datos
    }
    return value
  }

}

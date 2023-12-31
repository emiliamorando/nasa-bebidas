import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Categoria } from 'src/app/core/interfaces/categoria';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage  {
categoria: any;

categorias:Categoria | undefined;

constructor(
  private activatedRoute : ActivatedRoute
) { 
  activatedRoute.params.subscribe(params => {
    this.categoria = CATEGORIAS.find(categoria => categoria.nombre === params['nombre'])
})
}

}


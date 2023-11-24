import { Injectable } from '@angular/core';
import { CATEGORIAS } from '../constants/categorias';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  getCategorias(): Categoria[] {
    return CATEGORIAS;
  }
}
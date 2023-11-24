import { Component, inject } from '@angular/core';
import { OFERTAS } from '../core/constants/ofertas';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
ofertas = OFERTAS
cartService = inject(CartService)

}


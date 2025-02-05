import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;

  hasImageError = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      this.hasImageError = false;
    }
  }
}

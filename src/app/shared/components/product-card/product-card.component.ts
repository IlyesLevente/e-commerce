import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { NoImageSVGComponent } from '../../assets/icons/no-image-svg.component';
import { CartSVGComponent } from '../../assets/icons/cart-svg.component';
import { NumberPickerComponent } from '../number-picker/number-picker.component';

@Component({
  selector: 'app-product-card',
  imports: [
    CommonModule,
    NoImageSVGComponent,
    CartSVGComponent,
    NumberPickerComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true,
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

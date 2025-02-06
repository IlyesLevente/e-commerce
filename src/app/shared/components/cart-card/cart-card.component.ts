import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { NoImageSVGComponent } from '../../assets/icons/no-image-svg.component';
import { CommonModule } from '@angular/common';
import { NumberPickerComponent } from '../number-picker/number-picker.component';

@Component({
  selector: 'app-cart-card',
  imports: [CommonModule, NoImageSVGComponent, NumberPickerComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent implements OnChanges {
  @Input() product!: Product;
  hasImageError = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      this.hasImageError = false;
    }
  }
}

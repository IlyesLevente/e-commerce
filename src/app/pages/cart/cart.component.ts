import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { CartCardComponent } from '../../shared/components/cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }
}

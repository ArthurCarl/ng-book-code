import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /**
     * @input productList - the Product[] passed to us
     */
  @Input() productList: Product[];

  /**
   * @output productSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  @Output() productSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   *             the currently selected `Product`
   */
  private currentProduct: Product;
  constructor() {
    this.productSelected = new EventEmitter();
  }
  ngOnInit() {
  }
  clicked(product: Product): void {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}

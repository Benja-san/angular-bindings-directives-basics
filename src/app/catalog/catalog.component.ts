import { Component } from '@angular/core';
import { Catalog } from '../model/catalog';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  products: Catalog[] = [
    new Catalog(1, 'Iphone'),
    new Catalog(2, 'Xbox', true, 200),
    new Catalog(3, 'PS5', false, 400),
    new Catalog(4, 'Switch', false, 200),
    new Catalog(5, 'Pixel 8', true, 200),
    new Catalog(6, 'apple watch'),
  ];

  onSalesProducts: Catalog[] = this.products.filter(
    (product) => product.isDiscount
  );
  noPriceProducts: Catalog[] = this.products.filter(
    (product) => !product.price
  );
  noSaleswithPriceProducts: Catalog[] = this.products.filter(
    (product) => product.price && !product.isDiscount
  );

  ngOnInit() {
    console.log(this.onSalesProducts);
  }
}

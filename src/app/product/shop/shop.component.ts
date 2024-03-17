import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  price: number = 1000;
  totalProducts: number = 0;
  searchQuery: string = '';

  constructor(private router: Router) {}

  productCountChanged(count: number) {
    this.totalProducts = count;
  }

  onSearchSubmit() {
    this.router.navigate(['/product/search'], {
      queryParams: { query: this.searchQuery },
    });
  }
}

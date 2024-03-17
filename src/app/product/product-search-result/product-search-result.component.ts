import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css'],
})
export class ProductSearchResultComponent implements OnInit {
  price: number = 1000;
  totalProducts: number = 0;
  searchQuery: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';
      this.toastrService.info(this.searchQuery, 'Your Search query');
    });
  }

  onSearchSubmit() {
    this.router.navigate(['/product/search'], {
      queryParams: { query: this.searchQuery },
    });
  }

  onPriceChange(): void {
    // Do something with the changed price
    console.log('Price changed:', this.price);
    // Call your function or perform any logic here
  }

  productCountChanged(count: number) {
    this.totalProducts = count;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/product/product-category/models/category.model';
import { ProductModel } from 'src/app/product/product-category/models/product.model';
import {
  categories,
  sampleProducts,
} from 'src/app/shared/constants/data.model';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.css'],
})
export class FeaturedSectionComponent implements OnInit {
  categories: ProductCategory[] = [];
  products: ProductModel[] = [];
  selectedCategoryId!: number;

  ngOnInit(): void {
    this.categories = categories;
    this.products = sampleProducts;
    this.selectedCategoryId = -1;
  }

  //From ui we pass categoryId and filter
  filterByCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filterProductsByCategory();
  }

  filterProductsByCategory() {
    this.products =
      this.selectedCategoryId === -1
        ? sampleProducts
        : sampleProducts.filter(
            (f) => f.categoryId === this.selectedCategoryId
          );
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  products: ProductModel[] = [];
  @Input() maxPrice: number = 1000; //Now we will make this as input so parent component can pass dynamic values
  @Input() searchQuery: string = '';
  @Output() productCountChanged = new EventEmitter<number>();

  filteredProducts: ProductModel[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filterProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(10).subscribe((d) => {
      this.products = d;
      this.filterProducts();
      this.productCountChanged.emit(this.filteredProducts.length); //assign initially for this as well
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(
      (f) => f.price <= this.maxPrice
    );
    if (this.searchQuery) {
      this.filteredProducts = this.filteredProducts.filter((f) =>
        f.productName
          .toLowerCase()
          .includes(this.searchQuery.toLocaleLowerCase())
      );
    }
    this.productCountChanged.emit(this.filteredProducts.length);
  }

  addToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }
}

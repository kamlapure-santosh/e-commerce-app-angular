import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { routedComponents } from '../product/product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [routedComponents, ProductListComponent, CategoryComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

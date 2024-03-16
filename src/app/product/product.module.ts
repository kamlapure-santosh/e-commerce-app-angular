import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { routedComponents } from '../product/product-routing.module';

@NgModule({
  declarations: [routedComponents],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

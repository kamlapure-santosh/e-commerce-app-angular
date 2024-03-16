import { Component } from '@angular/core';
import { categories } from 'src/app/shared/constants/data.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent {
  title: string = 'All Departments';
  categories = categories;
}
/*
Data Bindings
Interpolation (One-Way Binding - (( expression }}):
Interpolation is a one-way binding technique where values from the component class are bound to the HTML template
It is denoted by double curly braces {{}}
*/

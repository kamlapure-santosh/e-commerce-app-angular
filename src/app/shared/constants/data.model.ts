import { ProductCategory } from '../product-category/models/category.model';
import { ProductModel } from '../product-category/models/product.model';

export const categories: ProductCategory[] = [
  { categoryId: 1, categoryName: 'Milk' },
  { categoryId: 2, categoryName: 'Vegetables' },
  { categoryId: 3, categoryName: 'Fruit & Nut Gifts' },
  { categoryId: 4, categoryName: 'Berries' },
  { categoryId: 5, categoryName: 'Ocean Foods' },
  { categoryId: 6, categoryName: 'Butter & Eggs' },
  { categoryId: 7, categoryName: 'Fastfood' },
  { categoryId: 8, categoryName: 'Onion' },
  { categoryId: 9, categoryName: 'Papayaya & Crisps' },
  { categoryId: 10, categoryName: 'Oatmeal' },
  { categoryId: 11, categoryName: 'Bananas' },
];

export const sampleProducts: ProductModel[] = [
  {
    productId: 1,
    productName: 'Fresh Milk',
    price: 50.0,
    quantity: 20,
    categoryId: 1,
    productImages: [
      {
        imageId: 1,
        productId: 1,
        imageUrl: 'assets/img/featured/feature-1.jpg',
      },
    ],
  },
  {
    productId: 2,
    productName: 'Banana',
    price: 30.0,
    quantity: 20,
    categoryId: 3,
    productImages: [
      {
        imageId: 2,
        productId: 2,
        imageUrl: 'assets/img/featured/feature-2.jpg',
      },
    ],
  },
  {
    productId: 3,
    productName: 'Gauva',
    price: 35.0,
    quantity: 20,
    categoryId: 3,
    productImages: [
      {
        imageId: 3,
        productId: 3,
        imageUrl: 'assets/img/featured/feature-3.jpg',
      },
    ],
  },
  {
    productId: 4,
    productName: 'Water Melon',
    price: 20.0,
    quantity: 20,
    categoryId: 3,
    productImages: [
      {
        imageId: 4,
        productId: 4,
        imageUrl: 'assets/img/featured/feature-4.jpg',
      },
    ],
  },
  {
    productId: 5,
    productName: 'Berry',
    price: 55.0,
    quantity: 20,
    categoryId: 4,
    productImages: [
      {
        imageId: 5,
        productId: 5,
        imageUrl: 'assets/img/featured/feature-5.jpg',
      },
    ],
  },
  {
    productId: 6,
    productName: 'Chicken Burger',
    price: 65.0,
    quantity: 20,
    categoryId: 6,
    productImages: [
      {
        imageId: 6,
        productId: 6,
        imageUrl: 'assets/img/featured/feature-6.jpg',
      },
    ],
  },
  {
    productId: 7,
    productName: 'Mango',
    price: 70.0,
    quantity: 20,
    categoryId: 3,
    productImages: [
      {
        imageId: 7,
        productId: 7,
        imageUrl: 'assets/img/featured/feature-7.jpg',
      },
    ],
  },
  {
    productId: 8,
    productName: 'Apple',
    price: 65.0,
    quantity: 20,
    categoryId: 3,
    productImages: [
      {
        imageId: 8,
        productId: 8,
        imageUrl: 'assets/img/featured/feature-8.jpg',
      },
    ],
  },
  // Add more sample products as needed
];

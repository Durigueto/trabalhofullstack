import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { ProductFormComponent } from './product-form/product-form';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/edit/:id', component: ProductFormComponent },
];

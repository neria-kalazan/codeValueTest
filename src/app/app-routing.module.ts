import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
    data: {breadcrumb: 'Products'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

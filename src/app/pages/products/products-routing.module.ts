import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import {ProductsViewComponent} from './view/products-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: ProductsComponent,
    data: {
      breadcrumb: '',
    },
    children: [
      {
        path: 'add',
        component: ProductsViewComponent,
        data: {
          breadcrumb: 'Add',
        },
      },
      {
        path: 'view/:id',
        component: ProductsViewComponent,
        data: {
          breadcrumb: 'View',
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

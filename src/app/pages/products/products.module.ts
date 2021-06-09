import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductsViewComponent} from './view/products-view.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzMessageServiceModule} from 'ng-zorro-antd/message';
import {CommonModule} from '@angular/common';
import {NzListModule, NzListPaginationComponent} from 'ng-zorro-antd/list';
import {FilterByKeywordModule} from '../../pipe/filter-by-keyword/filter-by-keyword.module';
import {SortByFieldModule} from '../../pipe/sort-by-field/sort-by-field.module';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzImageModule} from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsViewComponent,
  ],
  imports: [
    ProductsRoutingModule,
    NzGridModule,
    NzIconModule,
    NzMessageServiceModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzListModule,
    NzPaginationModule,
    NzTypographyModule,
    NzToolTipModule,
    NzPopconfirmModule,
    NzImageModule,
    FilterByKeywordModule,
    SortByFieldModule,


  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }

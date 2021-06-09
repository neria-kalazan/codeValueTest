import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortByFieldPipe} from './sort-by-field.pipe';


@NgModule({
  declarations: [ SortByFieldPipe ],
  exports: [
    SortByFieldPipe
  ],
  imports: [
    CommonModule
  ]
})

export class SortByFieldModule {}

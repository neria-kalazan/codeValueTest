import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterByKeywordPipe} from './filter-by-keyword.pipe';


@NgModule({
  declarations: [ FilterByKeywordPipe ],
  exports: [
    FilterByKeywordPipe
  ],
  imports: [
    CommonModule
  ]
})
export class FilterByKeywordModule {}

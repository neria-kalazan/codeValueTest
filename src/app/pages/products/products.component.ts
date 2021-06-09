import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Product} from '../../interfaces';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: Product[] = [];

  public sortOptions = [
    {t: 'Name', v: 'name'},
    {t: 'Price', v: 'price'},
    {t: 'Recently Added', v: 'created'}
  ];
  public keyword: string = '';
  public sortBy: string = '';
  public pageIdx: number = 1;


  constructor(
    private msg: NzMessageService,
    private productService: ProductService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.productService.getProductList()
      .subscribe((resp: any) => {
        this.productList = resp;
        this.ref.detectChanges();
      }, error => {
        this.msg.error(error.message || 'Failed to load products list');
      });
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId)
      .subscribe((resp: boolean) => {
        if (resp) {
          this.msg.success('This product removed successfully!');
        }
      }, error => {
        this.msg.error(error.message || 'Failed to load products list');
      })
      .add(() => {
        this.loadData();
      });
  }

  onActivate(elementRef: any) {
    elementRef.updateList.subscribe(() => {
      this.loadData();
    });
  }


}

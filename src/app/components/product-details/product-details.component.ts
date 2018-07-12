import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  productName = 'testas';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product = this.activatedRoute.snapshot.data['product'];  // paimame product iš masyvo data
  }

  // prieš sukuriant resolver
/* ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    this.getProduct(id);
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
         product => this.product = product)
  } */

}

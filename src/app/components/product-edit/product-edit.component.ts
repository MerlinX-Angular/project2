import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from '../../product.model';
import { ProductService } from '../../services/product.service';

@Component({
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    pageTitle = 'Product Edit';
    errorMessage: string;
    private currentProduct: IProduct;
    private originalProduct: IProduct;

    product: IProduct;

    constructor(
      private productService: ProductService,
       private router: Router,
       private activatedRoute: ActivatedRoute,

     ) { }

    ngOnInit() {
      this.activatedRoute.data.subscribe(   // paimame product iš masyvo data
            data => {
                 const product = data['product'];
                 this.onProductRetrieved(product);
            }
      );
    }


   // prieš sukuriant resolver
  /*  ngOnInit(): void {
           this.activatedRoute.params.subscribe(
                params => {
                  let id = +params['id'];
                  this.getProduct(id);
                }
           );
    }
    getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
           product => this.onProductRetrieved(product),
           error => this.errorMessage = error);
    } */

    onProductRetrieved(product: IProduct): void {
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }
    }

    deleteProduct(): void {
        if (this.product.id === 0) {
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe( () => this.onSaveComplete() );
           }
        }
    }

    saveProduct(): void {
        this.productService.saveProduct(this.product)
        .subscribe(() => this.onSaveComplete());
    }

    onSaveComplete(): void {
        this.reset();
        this.router.navigate(['/products']);
    }

    reset(): void {
        this.currentProduct = null;
        this.originalProduct = null;
    }
}

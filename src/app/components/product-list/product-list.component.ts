import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   pageTitle = 'Product List';
   imageWidth = 50;
   imageMargin = 2;
   showImage = false;
   listFilter: string;
   errorMessage: string;
   products: IProduct[];


  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

   ngOnInit(): void {
      this.listFilter = this.activatedRoute.snapshot.queryParams['filterBy'] || '';
      this.showImage = this.activatedRoute.snapshot.queryParams['showBy'] === 'true';

      this.productService.getProducts().subscribe(products => this.products = products);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}

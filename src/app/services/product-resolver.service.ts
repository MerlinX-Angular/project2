import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IProduct } from '../product.model';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

    constructor(
      private productService: ProductService,
      private router: Router,
    ) { }

        // per router, pagal id grąžinsime atitinkamo product aprašymą
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        const id = + route.params['id'];
        const product = this.productService.getProduct(id);
        return product;
    }
}

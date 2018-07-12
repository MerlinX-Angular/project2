import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { StarsComponent } from './components/stars/stars.component';

import { ProductService } from './services/product.service';
import { ProductResolver } from './services/product-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';

import { ProductFilterPipe } from './product-filter.pipe';


const productRoutes: Routes = [
    { path: 'products', component: ProductListComponent, canActivate: [AuthGuardService]},
      // įkeliame konkretų product prieš tai, kol pereisime į ProductDetailsComponent
    { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuardService],
             resolve: {product: ProductResolver}
    },
      // įkeliame konkretų product prieš tai, kol pereisime į ProductEditComponent
    { path: 'products/:id/edit', component: ProductEditComponent, canActivate: [AuthGuardService],
              resolve: {product: ProductResolver}
    }
];

@NgModule({
  imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(productRoutes)
  ],
  declarations: [
      ProductListComponent,
      ProductDetailsComponent,
      ProductEditComponent,
      StarsComponent,
      ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductResolver,
    AuthGuardService
  ]
})
export class ProductModule { }

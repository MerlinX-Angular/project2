import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../../services/product.service';

import { ProductEditComponent } from './product-edit.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/empty';

class RouterStub { // sukuriame dirbtiną Router
  navigate(params) {
  }
}
class ActivatedRouteStub { // sukuriame dirbtiną ActivatedRoute
  data: Observable<any> = Observable.empty();
  }

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditComponent ],
      imports: [ FormsModule,  HttpModule, RouterTestingModule ],
      providers: [ ProductService,
        { provide: Router, useClass: RouterStub }, // registruojame dirbtiną Router
        { provide: ActivatedRoute, useClass: ActivatedRouteStub } // dirbtiną ActivatedRoute
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if pageTitle is "Product Edit"', () => {
    expect(component.pageTitle).toEqual('Product Edit');
   });

  it('should redirect the user to the products page after onSaveComplete', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.onSaveComplete();
    expect(spy).toHaveBeenCalledWith(['/products']);
  });

});



import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductListComponent } from './product-list.component';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { RouterTestingModule } from '@angular/router/testing';
import { StarsComponent } from '../stars/stars.component';
import { ProductFilterPipe } from '../../product-filter.pipe';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule, RouterTestingModule ],
      declarations: [ ProductListComponent, StarsComponent, ProductFilterPipe ],
      providers: [ ProductService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should check if pageTitle is "Product List"', () => {
    expect(component.pageTitle).toEqual('Product List');
   });

  it('should load products from the server', () => {
    const service = TestBed.get(ProductService);
    spyOn(service, 'getProducts').and.returnValue(Observable.from([ [1, 2, 3]]));
    fixture.detectChanges();
    expect(component.products.length).toBe(3);
  });

  it('check if the value changes on click', () => {
    component.toggleImage();
    expect(component.showImage).toBeTruthy();
  });

});

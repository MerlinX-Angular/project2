import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductDetailsComponent } from './product-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';



describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [ RouterTestingModule ]

    });

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if pageTitle is "Product Detail"', () => {
    expect(component.pageTitle).toEqual('Product Detail');
  });


});

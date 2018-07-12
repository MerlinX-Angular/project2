import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StarsComponent } from './stars.component';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;
  let de: any;

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    });

    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('[title] should equal attribute rating', () => {
    component.rating = 5;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.crop'));
    expect(de.properties['title']).toBe(5);
  });
});

import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { Location } from '@angular/common';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [
        AuthService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const ro = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(ro).not.toBeNull();
  });

  it('should display the user name if user is logged in', () => {
    component.authService.userName = 'Jonas';
    component.authService.isAuthenticated = true;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.welcome').textContent).toContain('Welcome Jonas');
  });

  it('should\'t display the link Log In if user is logged in', () => {
    component.authService.isAuthenticated = true;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.logIn')).toBeNull();
  });

  it('should\'t display the link Log Out if user is not logged in', () => {
    component.authService.isAuthenticated = false;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.logOut')).toBeNull();
  });

  it('should redirect the user to the login page if user is not logged in ', () => {
    component.authService.isAuthenticated = false;
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = de[3].properties.href;
    expect(index).toContain('/login');
  });

  it('should redirect the user to the home page after logout', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.logout();
    expect(spy).toHaveBeenCalledWith(['/home']);
  });


});






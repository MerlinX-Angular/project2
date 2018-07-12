import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ProductData } from './product.data';
import { ProductModule } from './product.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth.service';


const routes: Routes = [
       { path: 'home', component: HomeComponent },
       { path: 'login', component: LoginComponent },
       { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: '**', component: NotFoundComponent }
 ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }), // imituojamas atsakymas iš serverio
    RouterModule.forRoot(routes),
    ProductModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

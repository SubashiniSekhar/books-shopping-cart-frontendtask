import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutPageComponent} from './checkout-page/checkout-page.component';
import {BookComponent} from './books/book/book.component';
import {BooksComponent} from './books/books.component';
import {BooksHomepageComponent} from './books-homepage/books-homepage.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const appRoutes: Routes = [
  { path: '', component: BooksHomepageComponent },
  { path: 'books', component: BooksComponent },
  {path: 'book/:id', component: BookComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouting {

}

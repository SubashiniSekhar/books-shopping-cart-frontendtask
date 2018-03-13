# BooksShopping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 5.2.0. It enables the user to add and remove books from shopping cart and finally checkout the selected books.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Using the application

The homepage displays a grid of books. These books are fetched from the books service, since there is no backend yet to cater to the http requests. Add a book to the cart or remove it from cart on the homepage or click on a book to see the description and the stock remaining for the book . The 'add to cart' button is available on the description page as well. Finally go to the checkout page by clicking on the cart button on the home page to purchase the books.

## Known issues

1. Adding only the last book in the first row of homepage, disrupts the page alignment.
2. I am still working on the cart button on the home page to update the quantity of the items in the cart. So for now the cart button doesnot display the quantity of items in the cart.

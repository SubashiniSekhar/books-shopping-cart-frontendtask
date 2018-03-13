import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../../services/books.service";
/*
 * component for setting up
  * the description page of
  * each book
 * */
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookid: number;
  @Input() page_type: string ="description_page";
  @Input() book_in_cart;

book: {
  id:number,
  name: string,
  author: string,
  description:string,
  pic: string,
  price:number,
  stock_remaining: number
};
  constructor(private route: ActivatedRoute, private books_service: BooksService) { }

  ngOnInit() {

    if (this.route.snapshot.params['id']){
      this.bookid = +this.route.snapshot.params['id'];
      this.book =  this.books_service.getBookDetails(this.bookid);
    }

  }

}

/*
 * service for handling the
 * books related functionality
 * */

export class BooksService{

  books =[
     {
      id:2,
      name:"Astrophysics",
      author: "Neil deGrasse Tyson",
      description:` The essential universe, from our most celebrated and beloved astrophysicist.`,
      pic: "https://images-na.ssl-images-amazon.com/images/I/51kyOGIHeIL._AC_SR201,266_.jpg",
      price:15.30,
      stock_remaining: 10,
      isItemAdded: false
    },
    {
      id:3,
      name:"The Glass Castle: A Memoir",
      author: "Jeannette Walls",
      description:"nice book",
      pic: "https://images-na.ssl-images-amazon.com/images/I/71VBpx0qsmL._AC_SR201,266_.jpg",
      price: 9.20,
      stock_remaining: 10,
      isItemAdded: false
    },
    {
      id:4,
      name:"Wonder",
      author: "R.J. Palacio",
      description:`The book that inspired the Choose Kind movement`,
      pic: "https://images-na.ssl-images-amazon.com/images/I/51nQKQZWR-L._AC_SR201,266_.jpg",
      price: 8.50,
      stock_remaining: 10,
      isItemAdded: false
    },
    {
      id:5,
      name:"The Great Alone",
      author: "Kristin Hannah",
      description:`Alaska, 1974.
                  Unpredictable. Unforgiving. Untamed.
                  For a family in crisis, the ultimate test of survival.`,
      price: 8.60,
      pic: "https://images-na.ssl-images-amazon.com/images/I/511Dl74cE9L._AC_SR201,266_.jpg",
      stock_remaining: 10,
      isItemAdded: false
    },
    {
      id:6,
      name:"Lincoln in the Bardo",
      author: "George Saunders",
      description:"nice book",
      pic: "https://images-na.ssl-images-amazon.com/images/I/619U7Ja11RL._AC_SR201,266_.jpg",
      price: 9.40,
      stock_remaining: 10,
      isItemAdded: false
    },
    {
      id:7,
      name:"Evicted",
      author: "Matthew Desmond",
      description:`WINNER OF THE 2017 PULITZER PRIZE FOR GENERAL NONFICTION `,
      price: 12.30,
      pic: "https://images-na.ssl-images-amazon.com/images/I/41c15bZNMhL._AC_SR201,266_.jpg",
      stock_remaining: 10,
      isItemAdded: false
    },
    {
      id:8,
      name:"Being Mortal",
      author: "Atul Gawande",
      description:"great book",
      pic: "https://images-na.ssl-images-amazon.com/images/I/814-gmU5y8L._AC_SR201,266_.jpg",
      price: 13.20,
      stock_remaining: 10,
      isItemAdded: false
    }, {
      id:1,
      name:"Educated: A Memoir",
      author: "Tara Westover",
      description:`An unforgettable memoir about a young girl who, kept out of school, 
      leaves her survivalist family and goes on to earn a PhD from Cambridge University`,
      pic: "https://images-na.ssl-images-amazon.com/images/I/41eliTRAsHL.jpg",
      price:10,
      stock_remaining: 10,
      isItemAdded: false
    }

  ];

  constructor() {};

  getBooksList(){
    return this.books;
  }

  /*
   * given the book id
   * retrieve the book object from the array
   * */
  getBookDetails(bookid: number){
    var needed_book = this.books.find(function (book) {
      return book.id === bookid;
    });
    return needed_book;
  }
  /*
   * given the book id
   * change the status of the
   * book as added in cart or not
   * */
  updateBookInCartStatus(bookid, status){
    this.getBookDetails(bookid).isItemAdded = status;
  }
  getBookInCartStatus(bookid){
    return bookid ? this.getBookDetails(bookid).isItemAdded: false;
  }
  /*
   * set the added to cart as false
   * for all book upon checkout
   * */
  resetBookList(){
    this.books.filter(function (book) {
      return book.isItemAdded = true;
    }).forEach(function(bookincart){
      bookincart.isItemAdded = false;
    });
  }

}

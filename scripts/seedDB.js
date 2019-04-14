const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    image: "https://images-na.ssl-images-amazon.com/images/I/51uMnADcfUL._SX321_BO1,204,203,200_.jpg",
    author: "Stephen King",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    link: "https://books.google.ca/books/about/The_Dead_Zone.html?id=LjdeY4gldV4C"
  },
  {
    title: "Lord of the Flies",
    image: "https://images-na.ssl-images-amazon.com/images/I/81WUAoL-wFL.jpg",
    author: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    link: "https://books.google.ca/books/about/Lord_of_the_Flies.html?id=3C-4dsIGlEgC&redir_esc=y"

  },
  {
    title: "The Catcher in the Rye",
    image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    author: "J.D. Salinger",
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    link: "https://books.google.ca/books/about/The_Catcher_in_the_Rye.html?id=j--EMdEfmbkC&redir_esc=y"

  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

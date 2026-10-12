// Задание 1
const book1: {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
} = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
  isAvailable: true,
};

console.log(book1.title);
console.log(book1.author);
console.log(book1.pages);
console.log(book1.isAvailable);

// Задание 2
const user: { name: string; age: number; email: string } = {
  name: "Alex",
  age: 25,
  email: "alex@example.com",
};

// user.age = "25";
// Error: Type 'string' is not assignable to type 'number'. (TS2322)
user.age = 25;

// Задание 3
const book3: {
  title: string;
  author: string;
  description?: string;
} = {
  title: "Dune",
  author: "Frank Herbert",
};

const bookWithDescription: {
  title: string;
  author: string;
  description?: string;
} = {
  title: "1984",
  author: "George Orwell",
  description: "Dystopian novel",
};

for (const item of [book3, bookWithDescription]) {
  if (item.description) {
    console.log(item.description);
  } else {
    console.log("No description");
  }
}

// Задание 4
const books = [
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Dune", author: "Frank Herbert", pages: 688 },
  { title: "Clean Code", author: "Robert Martin", pages: 464 },
];

const titles = books.map((book) => book.title);
const longBooks = books.filter((book) => book.pages > 400);
const dune = books.find((book) => book.title === "Dune");

console.log(titles, longBooks, dune);

// Задание 5 ⭐
const book5: {
  readonly id: number;
  title: string;
  author: {
    name: string;
    country: string;
  };
} = {
  id: 1,
  title: "Dune",
  author: {
    name: "Frank Herbert",
    country: "USA",
  },
};

console.log(book5.title);
console.log(book5.author.name);
console.log(book5.author.country);

// book5.id = 2;
// Error: Cannot assign to 'id' because it is a read-only property. (TS2540)

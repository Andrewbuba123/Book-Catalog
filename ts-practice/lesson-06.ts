// Задание 1
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Alex",
  email: "alex@example.com",
  isActive: true,
};

console.log(user);

// Задание 2
interface Book {
  readonly id: number;
  title: string;
  author: string;
  pages: number;
  description?: string;
}

const bookWithoutDescription: Book = {
  id: 1,
  title: "Dune",
  author: "Frank Herbert",
  pages: 688,
};

const bookWithDescription: Book = {
  id: 2,
  title: "1984",
  author: "George Orwell",
  pages: 328,
  description: "Dystopian novel",
};

// bookWithDescription.id = 3;
// Error: Cannot assign to 'id' because it is a read-only property. (TS2540)

// Задание 3
function printBook(book: Book): void {
  console.log(`${book.title} — ${book.author}`);
}

const books: Book[] = [bookWithoutDescription, bookWithDescription];

books.forEach(printBook);

const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// Задание 4
interface Person {
  name: string;
  email: string;
}

interface Admin extends Person {
  permissions: string[];
}

const admin: Admin = {
  name: "Alex",
  email: "alex@example.com",
  permissions: ["read", "write", "delete"],
};

console.log(admin);

// Задание 5 ⭐
interface Author {
  name: string;
  country: string;
}

interface LibraryBook {
  readonly id: number;
  title: string;
  pages: number;
  author: Author;
}

const libraryBooks: LibraryBook[] = [
  { id: 1, title: "Dune", pages: 688, author: { name: "Frank Herbert", country: "USA" } },
  { id: 2, title: "1984", pages: 328, author: { name: "George Orwell", country: "UK" } },
  { id: 3, title: "Clean Code", pages: 464, author: { name: "Robert Martin", country: "USA" } },
];

console.log(libraryBooks.map((book) => book.title));
console.log(libraryBooks.filter((book) => book.pages > 400));
libraryBooks.forEach((book) => console.log(book.author.name));

// libraryBooks[0].id = 10;
// Error: Cannot assign to 'id' because it is a read-only property. (TS2540)

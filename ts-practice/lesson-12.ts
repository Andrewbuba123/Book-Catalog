// Задание 1
function calculateArea(width: number, height: number): number {
  return width * height;
}

console.log(calculateArea(10, 5)); // 50

// Задание 2
function greet(name?: string): void {
  console.log(`Hello, ${name ?? "Guest"}!`);
}

greet("Alex"); // Hello, Alex!
greet(); // Hello, Guest!

// Задание 3
function sum(...numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// Задание 4
interface Book {
  title: string;
  author: string;
  pages: number;
}

type BookFilter = (book: Book) => boolean;

const books: Book[] = [
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Dune", author: "Frank Herbert", pages: 688 },
  { title: "Clean Code", author: "Robert Martin", pages: 464 },
];

const isLongBook: BookFilter = (book) => book.pages > 500;

function filterBooks(items: Book[], filter: BookFilter): Book[] {
  return items.filter(filter);
}

filterBooks(books, isLongBook).forEach((book) => console.log(book.title)); // Dune

// Задание 5 ⭐
function findBook(items: Book[], title: string): Book | undefined {
  return items.find((book) => book.title === title);
}

const foundBook = findBook(books, "Dune");

if (foundBook) {
  console.log(`Название: ${foundBook.title}`);
  console.log(`Автор: ${foundBook.author}`);
} else {
  console.log("Книга не найдена");
}

// console.log(foundBook.title);
// Error: 'foundBook' is possibly 'undefined'. (TS18048)

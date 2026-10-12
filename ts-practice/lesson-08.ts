// Задание 1
type User = {
  name: string;
  email: string;
};

type Employee = {
  company: string;
  position: string;
};

type Developer = User & Employee;

const developer: Developer = {
  name: "Alex",
  email: "alex@example.com",
  company: "Tech Corp",
  position: "Frontend",
};

console.log(developer);

// Задание 2
type Product = {
  title: string;
  price: number;
};

type ProductDetails = {
  description: string;
  category: string;
};

type FullProduct = Product & ProductDetails;

const fullProduct: FullProduct = {
  title: "Keyboard",
  price: 99,
  description: "Mechanical keyboard",
  category: "Electronics",
};

console.log(fullProduct);

// Задание 3
type Person = {
  name: string;
};

type Worker = {
  company: string;
};

type Coder = {
  programmingLanguage: string;
};

type SeniorDeveloper = Person & Worker & Coder;

const senior: SeniorDeveloper = {
  name: "Alex",
  company: "Tech Corp",
  programmingLanguage: "TypeScript",
};

console.log(senior);

// Задание 4
type Book = {
  title: string;
  pages: number;
};

type BookDetails = {
  author: string;
  genre: string;
};

type FullBook = Book & BookDetails;

const books: FullBook[] = [
  { title: "Dune", pages: 688, author: "Frank Herbert", genre: "Sci-Fi" },
  { title: "1984", pages: 328, author: "George Orwell", genre: "Dystopia" },
  { title: "Clean Code", pages: 464, author: "Robert Martin", genre: "Programming" },
];

const titles = books.map((book) => book.title);
const longBooks = books.filter((book) => book.pages > 400);
const sciFiBooks = books.filter((book) => book.genre === "Sci-Fi");

console.log(titles, longBooks, sciFiBooks);

// Задание 5 ⭐
type UserWithNumberId = {
  id: number;
  name: string;
};

type EmployeeWithStringId = {
  id: string;
  company: string;
};

// id: number & string = never — нет значения, которое одновременно number и string
type UserEmployee = UserWithNumberId & EmployeeWithStringId;

// const userEmployee: UserEmployee = { id: 1, name: "Alex", company: "Tech Corp" };
// Error: Type 'number' is not assignable to type 'never'. (TS2322)

// const userEmployee2: UserEmployee = { id: "1", name: "Alex", company: "Tech Corp" };
// Error: Type 'string' is not assignable to type 'never'. (TS2322)

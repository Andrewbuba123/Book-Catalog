// Задание 1
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = { id: 1, name: "Alex", email: "alex@example.com", isActive: true };

type UserId = string | number;

function printUserId(id: UserId): void {
  console.log(`User id: ${id}`);
}

printUserId(user.id);
printUserId("u-42");

// Задание 2
type Status = "loading" | "success" | "error";

function handleStatus(status: Status): void {
  switch (status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Success!");
      break;
    case "error":
      console.log("Something went wrong");
      break;
  }
}

handleStatus("loading");

type InvalidStatus = "loading" | "success" | "error" | "finished";
const invalid: InvalidStatus = "finished";
console.log(invalid);

// Задание 3
interface Person {
  name: string;
}

interface Employee {
  company: string;
}

interface DeveloperInterface extends Person, Employee {
  programmingLanguage: string;
}

const developerA: DeveloperInterface = {
  name: "Alex",
  company: "Tech Corp",
  programmingLanguage: "TypeScript",
};

type DeveloperType = Person & Employee & {
  programmingLanguage: string;
};

const developerB: DeveloperType = {
  name: "Sam",
  company: "Tech Corp",
  programmingLanguage: "TypeScript",
};

console.log(developerA, developerB);

// Задание 4
type ID = string | number;
type Coordinates = [number, number];
type Theme = "light" | "dark";

const id: ID = 42;
const coordinates: Coordinates = [52.23, 21.01];
const theme: Theme = "dark";

// const wrongTheme: Theme = "blue";
// Error: Type '"blue"' is not assignable to type 'Theme'. (TS2322)

console.log(id, coordinates, theme);

// Задание 5 ⭐
type BookFormat = "paperback" | "hardcover" | "ebook";

interface Book {
  readonly id: number;
  title: string;
  author: string;
  format: BookFormat;
}

const books: Book[] = [
  { id: 1, title: "Dune", author: "Frank Herbert", format: "hardcover" },
  { id: 2, title: "1984", author: "George Orwell", format: "paperback" },
  { id: 3, title: "Clean Code", author: "Robert Martin", format: "ebook" },
];

function printBookFormat(book: Book): void {
  console.log(`${book.title} → ${book.format}`);
}

books.forEach(printBookFormat);

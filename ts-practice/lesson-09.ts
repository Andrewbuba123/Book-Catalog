// Задание 1
const numbers: number[] = [10, 20, 30, 40];

numbers.push(50);
numbers.pop();
const firstNumber = numbers[0];

// numbers.push("60");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'. (TS2345)

console.log(numbers, firstNumber);

// Задание 2
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Kate" },
  { id: 3, name: "John" },
];

const userNames = users.map((user) => user.name);
const userWithId2 = users.find((user) => user.id === 2);
const usersAfterFirst = users.filter((user) => user.id > 1);

console.log(userNames, userWithId2, usersAfterFirst);

// Задание 3
type Coordinates = [number, number];

const coordinates: Coordinates = [52.23, 21.01];
const [latitude, longitude] = coordinates;

console.log(`Широта: ${latitude}, долгота: ${longitude}`);

// const wrongCoordinates: Coordinates = [52.23];
// Error: Type '[number]' is not assignable to type 'Coordinates'. Source has 1 element(s) but target requires 2. (TS2322)

// const wrongCoordinates2: Coordinates = ["52.23", "21.01"];
// Error: Type 'string' is not assignable to type 'number'. (TS2322)

// Задание 4
type BookSummary = [string, string, number];

const dune: BookSummary = ["Dune", "Frank Herbert", 688];
const nineteenEightyFour: BookSummary = ["1984", "George Orwell", 328];
const cleanCode: BookSummary = ["Clean Code", "Robert Martin", 464];

[dune, nineteenEightyFour, cleanCode].forEach(([title, , pages]) => {
  console.log(`${title}: ${pages} стр.`);
});

// Задание 5 ⭐
interface Book {
  title: string;
  author: string;
  pages: number;
}

function getBookSummary(book: Book): [string, number] {
  return [book.title, book.pages];
}

function getCoordinates(): [number, number] {
  return [52.23, 21.01];
}

console.log(
  getBookSummary({ title: "Dune", author: "Frank Herbert", pages: 688 }),
  getCoordinates()
);

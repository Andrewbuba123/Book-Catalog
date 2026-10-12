// Задание 1
type IsNumber<T> = T extends number ? true : false;

type NumberCheck = IsNumber<number>; // true
type StringCheck = IsNumber<string>; // false

const numberCheck: NumberCheck = true;
const stringCheck: StringCheck = false;
// const wrongCheck: NumberCheck = false;
// Error: Type 'false' is not assignable to type 'true'. (TS2322)

console.log(numberCheck, stringCheck);

// Задание 2
type IsArray<T> = T extends unknown[] ? true : false;

type ArrayCheck = IsArray<string[]>; // true
type NotArrayCheck = IsArray<string>; // false

const arrayCheck: ArrayCheck = true;
const notArrayCheck: NotArrayCheck = false;

console.log(arrayCheck, notArrayCheck);

// Задание 3
type ArrayElement<T> = T extends (infer Item)[] ? Item : never;

type StringElement = ArrayElement<string[]>; // string
type NumberElement = ArrayElement<number[]>; // number
type NotArrayElement = ArrayElement<string>; // never

const element: StringElement = "Dune";
const numberElement: NumberElement = 688;

console.log(element, numberElement);

// Задание 4
type FunctionResult<T> = T extends (...args: never[]) => infer Result ? Result : never;

function getTitle(): string {
  return "Dune";
}

type Result = FunctionResult<typeof getTitle>; // string

const result: Result = getTitle();

console.log(result);

// Задание 5 ⭐
interface Book {
  title: string;
  author: string;
}

interface User {
  name: string;
  email: string;
}

type ResponseData<T extends "book" | "user"> = T extends "book" ? Book : User;

type BookData = ResponseData<"book">; // Book
type UserData = ResponseData<"user">; // User

const bookData: BookData = { title: "Dune", author: "Frank Herbert" };
const userData: UserData = { name: "Alex", email: "alex@example.com" };

// const wrongData: BookData = { name: "Alex", email: "alex@example.com" };
// Error: Object literal may only specify known properties, and 'name' does not exist in type 'Book'. (TS2353)

console.log(bookData, userData);

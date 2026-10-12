// Задание 1
function identity<T>(value: T): T {
  return value;
}

const text = identity("Dune"); // string
const count = identity(688); // number
const flag = identity(true); // boolean

console.log(text, count, flag);

// Задание 2
function getLast<T>(items: T[]): T {
  const last = items[items.length - 1];

  // noUncheckedIndexedAccess: last имеет тип T | undefined, пустой массив нужно обработать
  if (last === undefined) {
    throw new Error("Массив пуст");
  }

  return last;
}

console.log(getLast([1, 2, 3])); // 3
console.log(getLast(["a", "b"])); // "b"

// Задание 3
// Без явного возвращаемого типа TS вывел бы (T | U)[], а не кортеж
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const bookPair = pair("Dune", 688); // [string, number]

console.log(bookPair);

// Задание 4
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3

// getLength(42);
// Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'. (TS2345)

// Задание 5 ⭐
interface Book {
  title: string;
  author: string;
}

interface User {
  id: number;
  name: string;
}

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

type BooksResponse = ApiResponse<Book[]>;
type UserResponse = ApiResponse<User>;

const booksResponse: BooksResponse = {
  data: [{ title: "Dune", author: "Frank Herbert" }],
  success: true,
};

const userResponse: UserResponse = {
  data: { id: 1, name: "Alex" },
  success: true,
};

console.log(booksResponse.data[0]?.title, userResponse.data.name);

// const wrongResponse: UserResponse = { data: [], success: true };
// Error: Type 'never[]' is missing the following properties from type 'User': id, name (TS2740)

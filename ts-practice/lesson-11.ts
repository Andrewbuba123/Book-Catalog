// Задание 1
const greeting: unknown = "Hello, TypeScript!";
const text = greeting as string;

console.log(text.toUpperCase());

// Задание 2
interface Book {
  title: string;
  author: string;
  pages: number;
}

const data: unknown = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

const book = data as Book;

console.log(`Название: ${book.title}`);
console.log(`Автор: ${book.author}`);
console.log(`Страницы: ${book.pages}`);

// Задание 3
// В HTML: <input id="search" type="text">
const input = document.getElementById("search") as HTMLInputElement;

console.log(input.value);

// Без as: getElementById возвращает HTMLElement | null, и у него нет свойства value
// const rawInput = document.getElementById("search");
// rawInput.value;
// Error: 'rawInput' is possibly 'null'. (TS18047)

// Задание 4
const answer: unknown = 42;
const answerText = answer as string;

// answerText.toUpperCase();
// Runtime: TypeError: answerText.toUpperCase is not a function
// TS позволил это, потому что as — это обещание компилятору, а не проверка и не преобразование.
// Из unknown можно "утверждать" любой тип, значение на самом деле остаётся числом.

console.log(answerText);

// Задание 5 ⭐
function printBook(value: unknown): void {
  const target = value as Book;

  console.log(`${target.title} — ${target.author} — ${target.pages} pages`);
}

printBook({ title: "Dune", author: "Frank Herbert", pages: 688 });

// printBook({ name: "Dune" });
// Выведет: "undefined — undefined — undefined pages"
// Type Assertion работает только на этапе компиляции и ничего не проверяет в рантайме,
// поэтому неверная структура проходит молча. Для таких данных нужен type guard (урок 13).

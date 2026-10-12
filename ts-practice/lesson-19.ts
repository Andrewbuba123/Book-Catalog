// Задание 1
interface BookShape {
  title: string;
  author: string;
  pages: number;
}

type BookKey = keyof BookShape; // "title" | "author" | "pages"

const key: BookKey = "author";
// const wrongKey: BookKey = "year";
// Error: Type '"year"' is not assignable to type 'keyof BookShape'. (TS2322)

console.log(key);

// Задание 2
const book = {
  title: "Dune",
  author: "Frank Herbert",
  pages: 688,
};

type Book = typeof book; // { title: string; author: string; pages: number }

const anotherBook: Book = { title: "1984", author: "George Orwell", pages: 328 };

console.log(anotherBook);

// Задание 3
type BookTitle = Book["title"]; // string
type BookAuthor = Book["author"]; // string
type BookPages = Book["pages"]; // number
type BookTitleOrPages = Book["title" | "pages"]; // string | number

const author: BookAuthor = "Frank Herbert";
const pages: BookPages = 688;
const titleOrPages: BookTitleOrPages = "Dune";
const title: BookTitle = "Dune";

console.log(title, author, pages, titleOrPages);

// Задание 4
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const bookTitle = getProperty(book, "title"); // string
const bookPages = getProperty(book, "pages"); // number

console.log(bookTitle.toUpperCase(), bookPages.toFixed(1));

// getProperty(book, "year");
// Error: Argument of type '"year"' is not assignable to parameter of type '"title" | "author" | "pages"'. (TS2345)

// Задание 5 ⭐
const config = {
  theme: "dark",
  language: "en",
  pageSize: 20,
};

type Config = typeof config; // { theme: string; language: string; pageSize: number }
type ConfigKey = keyof Config; // "theme" | "language" | "pageSize"
type ConfigValue = Config[ConfigKey]; // string | number

// Эквивалентная запись одним выражением: keyof typeof config
type ConfigKeyShort = keyof typeof config;

const configKey: ConfigKeyShort = "theme";
const configValue: ConfigValue = config[configKey];

console.log(configKey, configValue);

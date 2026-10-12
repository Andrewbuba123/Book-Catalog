// Задание 1
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello"); // HELLO
printValue(10.567); // 10.57

// Задание 2
interface BookInfo {
  title: string;
  author: string;
  pages: number;
}

interface UserInfo {
  name: string;
  email: string;
}

function printInfo(value: BookInfo | UserInfo): void {
  if ("title" in value) {
    console.log(`Книга: ${value.title}, ${value.author}`);
  } else {
    console.log(`Пользователь: ${value.name}, ${value.email}`);
  }
}

printInfo({ title: "Dune", author: "Frank Herbert", pages: 688 });
printInfo({ name: "Alex", email: "alex@example.com" });

// Задание 3
class BookEntity {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

class UserEntity {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

function printEntity(value: BookEntity | UserEntity): void {
  if (value instanceof BookEntity) {
    console.log(`Книга: ${value.title}`);
  } else {
    console.log(`Пользователь: ${value.name}`);
  }
}

printEntity(new BookEntity("Dune"));
printEntity(new UserEntity("Alex"));

// Задание 4
type Book = {
  type: "book";
  title: string;
  author: string;
};

type Magazine = {
  type: "magazine";
  title: string;
  issue: number;
};

type Publication = Book | Magazine;

function printPublication(publication: Publication): void {
  switch (publication.type) {
    case "book":
      console.log(`Книга: ${publication.title}, автор ${publication.author}`);
      break;
    case "magazine":
      console.log(`Журнал: ${publication.title}, выпуск ${publication.issue}`);
      break;
  }
}

// Задание 5 ⭐
function isBook(publication: Publication): publication is Book {
  return publication.type === "book";
}

const publications: Publication[] = [
  { type: "book", title: "Dune", author: "Frank Herbert" },
  { type: "magazine", title: "Wired", issue: 42 },
  { type: "book", title: "1984", author: "George Orwell" },
];

publications.forEach(printPublication);

const books = publications.filter(isBook); // Book[]

books.forEach((book) => console.log(book.author));

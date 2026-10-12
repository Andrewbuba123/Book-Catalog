// Задание 1
class BookBasic {
  title: string;
  author: string;
  pages: number;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo(): string {
    return `${this.title} — ${this.author}`;
  }
}

console.log(new BookBasic("Dune", "Frank Herbert", 688).getInfo()); // Dune — Frank Herbert

// Задание 2
class BookShort {
  constructor(
    public title: string,
    public author: string,
    public pages: number
  ) {}

  getInfo(): string {
    return `${this.title} — ${this.author}`;
  }
}

console.log(new BookShort("1984", "George Orwell", 328).getInfo());

// Задание 3
interface Printable {
  print(): void;
}

class PrintableBook implements Printable {
  constructor(
    public title: string,
    public author: string
  ) {}

  print(): void {
    console.log(`${this.title} — ${this.author}`);
  }
}

new PrintableBook("Clean Code", "Robert Martin").print();

// Задание 4
class BookWithId {
  constructor(
    readonly id: number,
    public title: string,
    public author: string
  ) {}
}

const bookWithId = new BookWithId(1, "Dune", "Frank Herbert");

// bookWithId.id = 10;
// Error: Cannot assign to 'id' because it is a read-only property. (TS2540)

console.log(bookWithId.id);

// Задание 5 ⭐
abstract class Publication {
  constructor(public title: string) {}

  abstract getInfo(): string;
}

class Book extends Publication {
  constructor(
    title: string,
    public author: string
  ) {
    super(title);
  }

  getInfo(): string {
    return `${this.title} — ${this.author}`;
  }
}

// const publication = new Publication("Dune");
// Error: Cannot create an instance of an abstract class. (TS2511)

console.log(new Book("Dune", "Frank Herbert").getInfo());

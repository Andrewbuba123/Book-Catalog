// Задание 1
class Box<T> {
  constructor(private value: T) {}

  setValue(value: T): void {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box("Dune"); // Box<string>
const numberBox = new Box(688); // Box<number>

stringBox.setValue("1984");
numberBox.setValue(328);

console.log(stringBox.getValue(), numberBox.getValue());

// stringBox.setValue(42);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'. (TS2345)

// Задание 2
interface Book {
  id: number;
  title: string;
  author: string;
}

class Collection<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

const bookCollection = new Collection<Book>();

bookCollection.add({ id: 1, title: "Dune", author: "Frank Herbert" });
bookCollection.add({ id: 2, title: "1984", author: "George Orwell" });
bookCollection.add({ id: 3, title: "Clean Code", author: "Robert Martin" });

console.log(bookCollection.getAll());

// Задание 3
class Pair<T, U> {
  constructor(
    public first: T,
    public second: U
  ) {}
}

const pair = new Pair("Dune", 688); // Pair<string, number>

console.log(pair.first.toUpperCase(), pair.second.toFixed(0));

// Задание 4 ⭐
interface Entity {
  id: number;
}

interface BookEntity extends Entity {
  title: string;
  author: string;
}

class Repository<T extends Entity> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

const books = new Repository<BookEntity>();

books.add({ id: 1, title: "Dune", author: "Frank Herbert" });
books.add({ id: 2, title: "1984", author: "George Orwell" });

console.log(books.findById(2)); // { id: 2, title: "1984", ... }
console.log(books.findById(99)); // undefined

// new Repository<string>();
// Error: Type 'string' does not satisfy the constraint 'Entity'. (TS2344)

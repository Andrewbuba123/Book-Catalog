// Задание 1
class User {
  public name: string;
  private password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  checkPassword(password: string): boolean {
    return this.password === password;
  }
}

const user = new User("Alex", "secret");

console.log(user.checkPassword("secret")); // true
console.log(user.checkPassword("wrong")); // false

// console.log(user.password);
// Error: Property 'password' is private and only accessible within class 'User'. (TS2341)

// Задание 2
class Publication {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }
}

class SimpleBook extends Publication {
  getTitle(): string {
    return this.title;
  }
}

const simpleBook = new SimpleBook("Dune");

console.log(simpleBook.getTitle());

// console.log(simpleBook.title);
// Error: Property 'title' is protected and only accessible within class 'Publication' and its subclasses. (TS2445)

// Задание 3
class BookWithModifiers {
  constructor(
    public title: string,
    private id: number,
    public readonly author: string
  ) {}

  getId(): number {
    return this.id;
  }
}

const bookWithModifiers = new BookWithModifiers("Dune", 1, "Frank Herbert");

console.log(bookWithModifiers.title, bookWithModifiers.getId());

// bookWithModifiers.id;
// Error: Property 'id' is private and only accessible within class 'BookWithModifiers'. (TS2341)

// bookWithModifiers.author = "Someone else";
// Error: Cannot assign to 'author' because it is a read-only property. (TS2540)

// Задание 4
class BankAccount {
  private balance = 0;

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Сумма пополнения должна быть больше нуля");
    }

    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(100);

console.log(account.getBalance()); // 100

// account.balance = 1_000_000;
// Error: Property 'balance' is private and only accessible within class 'BankAccount'. (TS2341)

// Задание 5 ⭐
class Book extends Publication {
  private pages: number;
  public readonly author: string;

  constructor(title: string, author: string, pages: number) {
    super(title);
    this.author = author;
    this.pages = pages;
  }

  getInfo(): string {
    return `${this.title} — ${this.author} — ${this.pages} pages`;
  }
}

console.log(new Book("Dune", "Frank Herbert", 688).getInfo()); // Dune — Frank Herbert — 688 pages

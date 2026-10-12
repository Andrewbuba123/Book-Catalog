// Задание 1
class Publication {
  constructor(public title: string) {}

  getInfo(): string {
    return this.title;
  }
}

class Book extends Publication {
  constructor(
    title: string,
    public author: string,
    public pages: number
  ) {
    super(title);
  }

  // Задание 3 + Задание 4: переопределяем getInfo и используем super.getInfo()
  getInfo(): string {
    return `${super.getInfo()} — ${this.author}`;
  }
}

// Задание 2
class Magazine extends Publication {
  constructor(
    title: string,
    public issue: number
  ) {
    super(title);
  }

  // Задание 3
  getInfo(): string {
    return `${super.getInfo()} — Issue ${this.issue}`;
  }
}

console.log(new Book("Dune", "Frank Herbert", 688).getInfo()); // Dune — Frank Herbert
console.log(new Magazine("Frontend Weekly", 42).getInfo()); // Frontend Weekly — Issue 42

// Задание 5 ⭐
const publications: Publication[] = [
  new Book("Dune", "Frank Herbert", 688),
  new Magazine("Frontend Weekly", 42),
];

publications.forEach((publication) => {
  console.log(publication.getInfo());
});

// publications[0].author;
// Error: Property 'author' does not exist on type 'Publication'. (TS2339)
// Через общий тип доступны только члены Publication — при этом getInfo()
// вызывается версия конкретного класса (полиморфизм).

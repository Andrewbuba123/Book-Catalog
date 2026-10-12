// Задание 1
// Проблемы исходной версии:
//   function updateBook(id: any, data: any): any
// - id: any принимает что угодно (строку, объект, null)
// - data: any не проверяется — можно передать { pagez: 1 } с опечаткой
// - результат any "заражает" весь код, который его использует
interface Book {
  title: string;
  author: string;
  pages: number;
}

type BookUpdate = Partial<Book>;

function updateBook(id: number, data: BookUpdate): void {
  console.log(`Книга ${id} обновлена:`, data);
}

updateBook(1, { pages: 700 });

// updateBook("1", { pages: 700 });
// Error: Argument of type 'string' is not assignable to parameter of type 'number'. (TS2345)

// updateBook(1, { pagez: 700 });
// Error: Object literal may only specify known properties, and 'pagez' does not exist in type 'Partial<Book>'. (TS2353)

// Задание 2
// BookUpdate = Partial<Book> объявлен выше: тип не дублируется вручную,
// при добавлении поля в Book он обновится автоматически
const bookUpdate: BookUpdate = { title: "Dune" };

console.log(bookUpdate);

// Задание 3
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = getFirst([1, 2, 3]); // number | undefined
const firstTitle = getFirst(["Dune", "1984"]); // string | undefined

console.log(firstNumber, firstTitle);

// firstTitle.toUpperCase();
// Error: 'firstTitle' is possibly 'undefined'. (TS18048)

console.log(firstTitle?.toUpperCase());

// Задание 4 ⭐
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("dune"); // DUNE
printValue(10.5); // 10.50

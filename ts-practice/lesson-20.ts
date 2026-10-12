// Задание 1
interface Book {
  title: string;
  author: string;
  pages: number;
}

type PartialBook = Partial<Book>; // { title?: string; author?: string; pages?: number }
type ReadonlyBook = Readonly<Book>; // все поля readonly
type BookPreview = Pick<Book, "title" | "author">; // { title: string; author: string }
type BookWithoutPages = Omit<Book, "pages">; // { title: string; author: string }

const partialBook: PartialBook = { title: "Dune" };
const readonlyBook: ReadonlyBook = { title: "Dune", author: "Frank Herbert", pages: 688 };
const bookPreview: BookPreview = { title: "Dune", author: "Frank Herbert" };
const bookWithoutPages: BookWithoutPages = { title: "Dune", author: "Frank Herbert" };

// readonlyBook.pages = 700;
// Error: Cannot assign to 'pages' because it is a read-only property. (TS2540)

console.log(partialBook, readonlyBook, bookPreview, bookWithoutPages);

// Задание 2
type Status = "pending" | "success" | "error";

type ActiveStatus = Exclude<Status, "error">; // "pending" | "success"

const activeStatus: ActiveStatus = "pending";
// const failedStatus: ActiveStatus = "error";
// Error: Type '"error"' is not assignable to type 'ActiveStatus'. (TS2322)

console.log(activeStatus);

// Задание 3
const statusMessages: Record<Status, string> = {
  pending: "Ожидание...",
  success: "Готово!",
  error: "Что-то пошло не так",
};

// Если убрать любой ключ, TS сообщит об ошибке:
// Property 'error' is missing in type '{ pending: string; success: string; }' but required in type 'Record<Status, string>'. (TS2741)

console.log(statusMessages.success);

// Задание 4 ⭐
function updateBook(id: number, changes: Partial<Book>): void {
  console.log(`Книга ${id} обновлена:`, changes);
}

updateBook(1, { pages: 700 });
updateBook(2, { title: "1984", author: "George Orwell" });

// updateBook(1, { price: 20 });
// Error: Object literal may only specify known properties, and 'price' does not exist in type 'Partial<Book>'. (TS2353)

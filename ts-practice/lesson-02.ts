const title: string = "Dune";
const author: string = "Frank Herbert";
const pages: number = 412;
const rating: number = 4.8;
const isAvailable: boolean = true;

console.log(title);
console.log(author);
console.log(pages);
console.log(rating);
console.log(isAvailable);

// const wrongPages: number = "four hundred";
// Error: Type 'string' is not assignable to type 'number'. (TS2322)

// const wrongTitle: string = 123;
// Error: Type 'number' is not assignable to type 'string'. (TS2322)

// const wrongIsAvailable: boolean = "yes";
// Error: Type 'string' is not assignable to type 'boolean'. (TS2322)

let selectedBook: string | null = null;

selectedBook = "Dune";

console.log(selectedBook);

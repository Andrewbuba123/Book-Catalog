const title = "Dune";
const pages = 412;
const rating = 4.8;
const isAvailable = true;

let status = "loading";
status = "success";

// status = 123;
// Error: Type 'number' is not assignable to type 'string'. (TS2322)

function calculatePrice(price: number, quantity: number) {
  return price * quantity;
}

const total = calculatePrice(20, 3);

console.log(title, pages, rating, isAvailable, status, total);

// Задание 1
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String: ${value}`);
  } else {
    console.log(`Number: ${value}`);
  }
}

printValue("Dune");
printValue(42);

// Задание 2
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("dune"));
console.log(formatValue(19.5));

// Задание 3
type Status = "loading" | "success" | "error";

function showStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Something went wrong");
  }
}

showStatus("loading");
showStatus("success");
showStatus("error");

// showStatus("finished");
// Error: Argument of type '"finished"' is not assignable to parameter of type 'Status'. (TS2345)

// Задание 4
function printBook(book: string | null): void {
  if (book === null) {
    console.log("No book selected");
    return;
  }
  console.log(`Selected book: ${book}`);
}

printBook(null);
printBook("Dune");

// Задание 5 ⭐
function processBookData(data: string | number | null): void {
  if (data === null) {
    console.log("No data");
  } else if (typeof data === "string") {
    console.log(`Book title: ${data}`);
  } else {
    console.log(`Book ID: ${data}`);
  }
}

processBookData(null);
processBookData("Dune");
processBookData(42);
processBookData(0);

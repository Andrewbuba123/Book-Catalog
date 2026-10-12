// Задание 1
enum BookStatus {
  Available = "available",
  Borrowed = "borrowed",
  Reserved = "reserved",
}

let status: BookStatus;

status = BookStatus.Available;
status = BookStatus.Borrowed;
status = BookStatus.Reserved;

// status = "deleted";
// Error: Type '"deleted"' is not assignable to type 'BookStatus'. (TS2322)

console.log(status);

// Задание 2
enum UserRole {
  Admin = "admin",
  Editor = "editor",
  User = "user",
}

interface User {
  name: string;
  role: UserRole;
}

const users: User[] = [
  { name: "Alex", role: UserRole.Admin },
  { name: "Kate", role: UserRole.Editor },
  { name: "John", role: UserRole.User },
];

users.forEach((user) => {
  if (user.role === UserRole.Admin) {
    console.log(`${user.name} — администратор`);
  }
});

// Задание 3
const greeting: unknown = "Hello, TypeScript!";

if (typeof greeting === "string") {
  console.log(greeting.toUpperCase());
}

// greeting.toUpperCase();
// Error: 'greeting' is of type 'unknown'. (TS18046)

// Задание 4
const answer: unknown = 42;

if (typeof answer === "number") {
  console.log(answer.toFixed(2)); // 42.00
}

// Задание 5 ⭐
function printValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.length);
  } else if (typeof value === "number") {
    console.log(value * 2);
  } else if (typeof value === "boolean") {
    console.log("Boolean value");
  } else {
    console.log("Unknown value");
  }
}

printValue("Hello"); // 5
printValue(10); // 20
printValue(true); // Boolean value
printValue(null); // Unknown value

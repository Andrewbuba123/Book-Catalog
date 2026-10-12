const message: string = "Hello, TypeScript!";
console.log(message);

const username: string = "Alice";
const age: number = 25;
const isStudent: boolean = true;

// const wrongUsername: string = 25;
// Error: Type 'number' is not assignable to type 'string'. (TS2322)

// const wrongAge: number = "25";
// Error: Type 'string' is not assignable to type 'number'. (TS2322)

const inferredUsername = "Alice";
const inferredAge = 25;
const inferredIsStudent = true;

console.log(username, age, isStudent);
console.log(inferredUsername, inferredAge, inferredIsStudent);

function greeter(person: string): string {
  return "Hello, " + person;
}

let users = ["Jane User", "John User"];

for (const user of users) {
  console.log(greeter(user));
}
//or

function greeterArray(persons: string[]): string[]{
    return persons.map(person => "Hello, "+ person);
}
console.log(greeterArray(users));
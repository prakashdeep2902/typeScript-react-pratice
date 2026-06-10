type Book = {
  name: string;
  price: string;
};

const bookInString =
  '{"name":"The Power of your subconscious mind","price":"120"}';
const BookObject = JSON.parse(bookInString) as Book;

let value: any;

((value = "chai"), (value = [1, 2, 3]));
value = 2.5;

console.log(value.toUpperCaste());

// never example

type Role = "admin" | "user" | "superAdmin";

const dashBoard = (role: Role): void => {
  if (role === "admin") {
    console.log(`redirect to ${role}`);
    return;
  }
  if (role === "user") {
    console.log(`redirect to ${role}`);
    return;
  }
  role;
};

const Example2 = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Name:{BookObject.name}</h1>
      <h1>Price:{BookObject.price}</h1>
      <h1>Value:{value}</h1>
    </div>
  );
};

export default Example2;

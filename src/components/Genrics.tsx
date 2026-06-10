function wrapArray<T, B>(items: T, pro: B): [T, B] {
  return [items, pro];
}

console.log(wrapArray(43, 12));
console.log(wrapArray("adark", "prakash"));
console.log(
  wrapArray(
    { name: "vikash", age: 23, feture: ["Job", true, false] },
    { name: "akash", age: 25, feture: ["Job", true, false] },
  ),
);

interface cate<T> {
  yadav: T;
  buhmihar: T;
}

const suraj: cate<string> = { yadav: "yes", buhmihar: "no" };
const Prakash: cate<number> = { buhmihar: 123, yadav: 12 };

//
interface APiPromis<T> {
  status: number;
  data: T;
}

const res: APiPromis<{ readonly id: number; userName: string }> = {
  status: 200,
  data: { id: 123, userName: "Prakash" },
};

const Genrics = () => {
  return <div>Genrics</div>;
};

export default Genrics;

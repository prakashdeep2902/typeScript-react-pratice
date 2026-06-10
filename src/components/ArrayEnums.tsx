const ArrayEnums = () => {
  const Person: string[] = ["prakash", "vikash", "askash"];
  Person.push("vikas");

  const rating: Array<number> = [4.5, 5.0, 20];

  //   array of object

  type user = {
    readonly id: number;
    name: string;
    feture: string;
    isJob: boolean;
    hobbies: [number, string, string];
  };

  const employee: user[] = [
    {
      id: 1,
      name: "prakash",
      feture: "nothing",
      isJob: true,
      hobbies: [12, "coding", "sleeping"],
    },
    {
      id: 2,
      name: "vikash",
      feture: "nothing",
      isJob: true,
      hobbies: [12, "coding", "sleeping"],
    },

    {
      id: 3,
      name: "akash",
      feture: "nothing",
      isJob: true,
      hobbies: [12, "coding", "sleeping"],
    },
  ];

  //readonly array

  const city: readonly string[] = ["delhi", "nawada", "jaipur"];

  //   multidimtions array

  const table: number[][] = [
    [1, 2, 3],
    [2, 3, 4.3],
  ];

  //   tuppels

  let tuple: [string, number] = ["prakaash", 24];

  tuple = ["vikash", 23];

  let userInfo: [string, number, boolean?];

  userInfo = ["prakash", 100];
  userInfo = ["akash", 12, true];

  const location: readonly [number, number] = [123, 234];

  console.log(location);

  //   named Tuple
  const user: [name: string, age: number] = ["vikash", 24];

  //   enums

  enum Sport {
    FOOTBALLER,
    CRICKETR,
    BASKETBALL,
  }

  enum Status {
    PENDING = 100,
    SERVING = 101,
    CANCELLED = 102,
  }

  let orderStatus = Status.SERVING;

  if (orderStatus === Status.SERVING) {
    console.log("Order is serving");
  }

  const person = Sport.BASKETBALL;

  //   export const Status = {
  //   PENDING: 100,
  //   SERVING: 101,
  //   CANCELLED: 102,
  // } as const;

  // export type Status = (typeof Status)[keyof typeof Status];

  //   hetrogenus enum
  enum RabdeumEnum {
    Id = 1,
    Name = "chai",
  }

  //   you can make enum constant
  const enum sugers {
    Large = 1,
    Low = 2,
    large = 3,
  }

  const s = sugers.Low;

  // excetion
  let t: [string, number] = ["chai", 10];
  t.push("exta");

  return <div>ArrayEnums</div>;
};

export default ArrayEnums;

type Product = {
  name: string;
  price: number;
  feature: string[];
};

let mobile: Product = {
  name: "iphone 17",
  price: 150000,
  feature: ["compackt", "good camera", "somthing spaical"],
};

let tv = {
  name: "LG Smart tv",
  price: 50000,
  feature: ["google Assistanet", "qLED", "75 Inces"],
  size: "123 Inces",
};

mobile = tv;

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "200ml",
};

let bigCup = {
  size: "500ml",
  material: "steel",
};

smallCup = bigCup;

// pick type object

type Sports = "FootBall" | "cricket" | "basketBall";

type User = {
  name: string;
  Job: string;
  hight: number;
  company: string;
  SportsType: Sports;
  Gole: number;
  runs: number;
  Basket: number;
};

type employeeInfo = Pick<User, "name" | "Job" | "company">;

const employee: employeeInfo = {
  name: "prakash",
  Job: "SDE",
  company: "Nobroker",
};

// partial type : wea re passing selected data

const FootBallSportPerson: Partial<User> = {
  name: "Messi",
  SportsType: "FootBall",
  Gole: 1200,
  Job: "Footbaler",
};

// Omit we are not allow to pass selcetd data
const cricketSportPerson = (
  obj: Omit<User, "Job" | "company" | "Basket" | "Gole">,
) => {
  console.log(obj);
};

cricketSportPerson({
  name: "virat Kholi",
  hight: 6,
  SportsType: "cricket",
  runs: 10000,
});

//example of required
const normalPerson = (obj: Required<User>) => {
  console.log(`user is ${JSON.stringify(obj)}`);
};

normalPerson({
  name: "vikash",
  Job: "Socila media Manger",
  hight: 6,
  company: "English With Ranni Mam",
  SportsType: "basketBall",
  Gole: 12,
  runs: 300,
  Basket: 10,
});
const Object = () => {
  return (
    <div>
      <ul>
        <li>{mobile.name}</li>
        <li>{mobile.price}</li>
        <li>{mobile.feature.map((fe) => fe)}</li>
      </ul>

      <div>
        <h1>Employee</h1>
        <ul>
          <li>name:{employee.name}</li>
          <li>company:{employee.company}</li>
          <li>Job:{employee.Job}</li>
        </ul>

        <div>{JSON.stringify(FootBallSportPerson)}</div>
      </div>
    </div>
  );
};

export default Object;

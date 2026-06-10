class Chai {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    ((this.flavour = flavour), (this.price = price));
  }
}

const newChai = new Chai("adark", 20);

// access modifier in TS

interface userDetails {
  name: string;
  job: string;
  height: string;
}

interface salary {
  EmployeeNo: number;
  salary: string;
}

class users {
  public details: userDetails = {
    name: "prakash",
    job: "SDE",
    height: "6Ft",
  };

  private IDR: number = 1233242;
  showAlldetails() {
    return { id: this.IDR, ...this.details };
  }

  protected salaryDetails: salary = {
    EmployeeNo: 37823,
    salary: "2903883200",
  };
}

const use = new users();
console.log("showAlldetails", use.showAlldetails());

class HrAdmin extends users {
  getSalary() {
    return { ...this.salaryDetails, ...this.details };
  }
}

const hr = new HrAdmin();

console.log(hr.getSalary());

// getter setter

class bank {
  private _id: number = 12345;

  get id() {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
}

const b = new bank();
b.id = 12399393;
console.log(b.id);

// static member in OOps
class animal {
  static animalName = "dog";
  constructor(public animalFeture: string) {}
}

console.log("animal.AnimalName:::", animal.animalName);

// composition

class Heater {
  heat() {}
}

class chaiMaker {
  constructor(private heater: Heater) {}

  make(): void {
    this.heater.heat;
  }
}

const Oops = () => {
  return <div>Oops</div>;
};

export default Oops;
function make() {
  throw new Error("Function not implemented.");
}

// Interface main gole it's giving object safe

interface User {
  getpersonalDetails(): void;
  getHobbieDetails(): void;
  getProfessionalDetails(): void;
}

const employee: User = {
  getpersonalDetails() {},
  getHobbieDetails() {},
  getProfessionalDetails() {},
};

console.log("employee:::===>", employee.getHobbieDetails);

// index signuture

interface ratingOfshop {
  [shoes: string]: number;
}

const Rating: ratingOfshop = {
  Nike: 9,
};

console.log("Rating::::==>", Rating);

// interfaces merging

interface user {
  name: string;
}

interface user {
  job: string;
}

const u: user = {
  name: "pprakash",
  job: "SDE",
};

console.log("u::::::=>", u);

const InterFacesGen = () => {
  return <div>InterFacesGen</div>;
};

export default InterFacesGen;

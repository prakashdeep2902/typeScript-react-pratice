type status = "Pending" | "success" | "failed";

type ApiResponse = {
  data: string;
  status: status;
};

const res: ApiResponse = {
  data: "prakash",
  status: "success",
};

// What is declaration merging?

interface user {
  name: string;
}
interface user {
  role: string;
}

const employee: user = { name: "prakash", role: "sde" };

// tuple Type

type Footboller = [name: string, height: number];

const sportPerson: Footboller = ["ronaldo", 6.3];

const InterFaces = () => {
  return (
    <div>
      <h1>{res.status}</h1>
      {res.data}

      <h1>Employee</h1>
      <h2>{employee.name}</h2>
      <h3>{employee.role}</h3>

      <h1>Footboller</h1>
      <div>
        {sportPerson.map((s) => (
          <ul>
            <li>{s}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default InterFaces;

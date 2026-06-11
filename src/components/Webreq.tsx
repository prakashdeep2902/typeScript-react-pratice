import axios, { type AxiosResponse } from "axios";

const Webreq = () => {
  interface user {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const FetchData = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const response: AxiosResponse<user> = await axios.get(url);
      console.log(response.data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log("axios Error", error.message);
      }
    }
  };

  return (
    <div>
      <button
        className="button"
        style={{ background: "light blue" }}
        onClick={FetchData}
      >
        Click here to fetch
      </button>
    </div>
  );
};

export default Webreq;

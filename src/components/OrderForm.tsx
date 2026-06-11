import { useState } from "react";

interface OrderFormprops {
  onSubmit(order: { name: string; orderno: number }): void;
}

interface InputData {
  ordername: string;
  ordernumber: string;
}
export const OrderForm = ({ onSubmit }: OrderFormprops) => {
  const [data, setData] = useState<InputData>({
    ordername: "",
    ordernumber: "",
  });

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const HandelSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name: data.ordername, orderno: Number(data.ordernumber) | 0 });

    setData({
      ordername: "",
      ordernumber: "",
    });
  };

  return (
    <form onSubmit={HandelSubmit}>
      <input
        type="text"
        name="ordername"
        value={data.ordername}
        onChange={handelOnChange}
      />
      <input
        type="number"
        name="ordernumber"
        value={data.ordernumber}
        onChange={handelOnChange}
      />
      <button type="submit">place A order</button>
    </form>
  );
};

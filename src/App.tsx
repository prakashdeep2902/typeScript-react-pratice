import { Card } from "./components/Card";
import { CardList } from "./components/CardList";
import { Counter } from "./components/Counter";
import Genrics from "./components/Genrics";
import Webreq from "./components/Webreq";

import type { card, cardType } from "./components/Types";
import { OrderForm } from "./components/OrderForm";
import { Product } from "./components/Product";
import { useFetch } from "./Hooks/UseFetch.ts";
import { ReduxCounter } from "./components/ReduxCounter.tsx";

const menu: card[] = [
  {
    id: 1,
    name: "samsung s24",
    price: 20000,
  },
  {
    id: 2,
    name: "samsung s25",
    price: 30000,
  },
  {
    id: 3,
    name: "samsung s26",
    price: 40000,
  },
  {
    id: 4,
    name: "samsung s27",
    price: 50000,
  },
  {
    id: 5,
    name: "samsung s28",
    price: 60000,
  },
];

const animal: cardType = {
  name: "dog",
  bread: "labradog",
  price: 2000,
};

const App = () => {
  // const { data, loading, err } = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts",
  // );

  return (
    <>
      {/* <Oops />
      <Object />
      <InterFaces />
      <FunctionTs /> */}

      {/* <InterFacesGen /> */}
      {/* 
      <Genrics />
      <Webreq />
      <Card dog={animal} />
      <Counter />
      <OrderForm
        onSubmit={(order) => {
          console.log(order.name);
          console.log(order.orderno);
        }}
      /> */}

      {/* <CardList items={menu} /> */}
      {/* 
      <Product
        id={123}
        name="Iphone 17 pro Max"
        category="Mobile"
        price={160000}
        addtoCartButton={<button>add in cart button </button>}
      >
        <img src="https://picsum.photos/id/237/200/300" alt="Lourm" />
      </Product>

      <div>{JSON.stringify(data)}</div> */}

      <ReduxCounter />
    </>
  );
};

export default App;

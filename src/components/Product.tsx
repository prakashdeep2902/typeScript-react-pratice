import type { ReactNode } from "react";

interface productProps {
  readonly id: number;
  name: string;
  category: string;
  price: number;
  children: ReactNode;
  addtoCartButton?: ReactNode;
}

export const Product = ({
  id,
  name,
  category,
  price,
  children,
  addtoCartButton,
}: productProps) => {
  return (
    <div>
      <h1>Id:{id}</h1>
      {children}
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h4>{price}</h4>
      {addtoCartButton && <button> Add in cart</button>}
    </div>
  );
};

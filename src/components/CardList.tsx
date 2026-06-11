import type { card } from "./Types";
import { Card } from "./Card";

interface cardListProps {
  items: card[];
}

export const CardList = ({ items }: cardListProps) => {
  return (
    <div>
      {items.map((e) => (
        <Card key={e.id} name={e.name} price={e.price} />
      ))}
    </div>
  );
};

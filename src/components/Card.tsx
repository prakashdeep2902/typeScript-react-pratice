import type { cardType } from "./Types";

interface cardProp {
  dog: cardType;
}
export const Card = ({ dog }: cardProp) => {
  return (
    <article>
      <h2>
        {dog.name} {dog.price > 100 && <span>⭐</span>}
      </h2>
      <p>{dog.price}</p>
    </article>
  );
};

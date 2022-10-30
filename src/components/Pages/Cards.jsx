import { Card } from "./Card";
import styles from "../CSS/cards.module.css";
export function Cards({ cards }) {
  return (
    <>
      {cards && (
        <div className={styles.card_container}>
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </>
  );
}

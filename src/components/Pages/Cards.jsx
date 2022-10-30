import { Card } from "./Card"
import styles from "../CSS/cards.module.css"
export function Cards({ magic, condition }) {
  return (
    <>
      {magic && (
        <div className={styles.card_container}>
          <Card status={condition} cards={magic} />
        </div>
      )}
    </>
  )
}

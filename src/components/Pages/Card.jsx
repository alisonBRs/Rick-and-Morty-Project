import styles from "../CSS/cards.module.css"

export function Card({ cards }) {
  return (
    <>
      {cards?.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.image} alt={card.id} />

          <div className={styles.card_description}>
            <div className={styles.card_about1}>
              <h2>{card.name}</h2>
              <h4>
                Status: {""}
                <span
                  className={`${styles.card_status} ${
                    styles[card.status.toLowerCase()]
                  }`}
                ></span>{" "}
                {card.status}
              </h4>
            </div>

            <div className={styles.card_about2}>
              <p>
                <span>Gender: </span>
                {card.gender}
              </p>
              <p>
                <span>Specie: </span>
                {card.species}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

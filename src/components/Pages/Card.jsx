import styles from "../CSS/cards.module.css";

const StatusMap = {
  alive: "vivo",
  dead: "morto",
  unknown: "desconhecido",
};

function resolveStatusClassName(status) {
  return styles[StatusMap[status.toLowerCase()]];
}

export function Card({ card }) {
  return (
    <>
      <div className={styles.card}>
        <img src={card.image} alt={card.id} />

        <div className={styles.card_description}>
          <div className={styles.card_about1}>
            <h2>{card.name}</h2>
            <h4>
              Status: {""}
              <span
                className={`${styles.card_status} ${resolveStatusClassName(
                  card.status
                )}`}
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
    </>
  );
}

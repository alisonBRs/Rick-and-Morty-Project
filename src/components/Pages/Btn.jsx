import styles from "../CSS/button.module.css"

export function Btn({ text, check }) {
  return (
    <button className={styles.btn} type="submit" onChange={check}>
      {text}
    </button>
  )
}

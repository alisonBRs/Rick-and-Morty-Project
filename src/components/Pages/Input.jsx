import styles from "../CSS/input.module.css"

export function Input({ placeholder, change }) {
  return (
    <input
      className={styles.input}
      onChange={change}
      placeholder={placeholder}
    />
  )
}

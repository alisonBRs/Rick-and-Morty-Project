import axios from "axios"
import { useState } from "react"
import { Btn } from "./Btn"
import { Input } from "./Input"
import styles from "../CSS/mainpage.module.css"
import { Cards } from "./Cards"
export function Mainpage() {
  const [find, setFind] = useState()
  const [search, setSearch] = useState("")

  function noSub(e) {
    e.preventDefault()

    axios
      .get("https://rickandmortyapi.com/api/character?name=" + search)
      .then(({ data }) => {
        setFind(data.results)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.main}>
      <h1>Rick and Morty Project</h1>
      <form onSubmit={noSub}>
        <Input
          change={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Pesquise aqui"
        />
        <Btn text="Buscar" />
        <Cards condition="alive" magic={find} />
      </form>
    </div>
  )
}

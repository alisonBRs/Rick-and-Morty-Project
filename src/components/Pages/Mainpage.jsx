import axios from "axios";
import { useState, useEffect } from "react";
import { Btn } from "./Btn";
import { Input } from "./Input";
import styles from "../CSS/mainpage.module.css";
import { Cards } from "./Cards";

export function Mainpage() {
  const [find, setFind] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    if (!search.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(
          `https://rickandmortyapi.com/api/character?name=${search}&page=${page}`
        )
        .then(({ data }) => {
          setFind([...find, ...data.results]);
          setMaxPages(data.info.pages);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }, 3000);
  }

  function noSub(e) {
    e.preventDefault();
    fetchData();
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
        <Cards condition="alive" cards={find} />
        {isLoading && <p>Carregando...</p>}
        {find.length ? (
          page >= maxPages ? (
            <span>Nao tem mais registros</span>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              Carregar mais
            </button>
          )
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

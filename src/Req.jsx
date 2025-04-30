import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { api } from './api/dragonball'
import { Card } from './Card' // Adicionada a importação do Card

export default function Req() {
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [searchName, setSearchName] = useState("")
  const [erro, setErro] = useState(false)

  useEffect(() => {
    // Não faz requisição se não houver página informada
    if (page.trim() === "") return

    setErro(false) // reseta o erro antes de nova requisição

    api.get(`/character/?page=${page}&name=${searchName}`)
      .then((response) => {
        setData(response.data.results)
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErro(true)
          setData([]) // limpa os dados se não encontrar
        } else {
          console.error("Erro ao buscar dados:", error)
        }
      })
  }, [page, searchName])

  return (
    <section className={style.wrapPage}>
      <h1 className={style.titleName}>Dragon Ball API</h1>

      <input
        style={{ padding: "10px", marginRight: "10px" }}
        type="number"
        min="1"
        max="42"
        placeholder="Digite uma página (1–42)"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />

      <input
        style={{ padding: "10px", marginRight: "10px" }}
        type="text"
        placeholder="Buscar por nome"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      {erro && <p style={{ color: "red" }}>Página ou nome não encontrado.</p>}

      <div className={style.wrapCards}>
        {data.map((item, index) => (
          <Card key={index} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  )
}

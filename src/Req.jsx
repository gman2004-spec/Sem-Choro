import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { api } from './api/dragonball'

export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")

    const [erro, setErro] = useState(false)

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
            setErro(true)
            }
            console.log(error)
        })
    }, [page, searchName])
    console.log(data)
    return(
        <section className={style.wrapPage}>
            <h1 className={style.titleName}>Dragon Ball API</h1>
            <input style={{padding: "10px", marginRight: "10px"}} type="text" placeholder='Digite uma página (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
            {erro && <p>Página não encontrada</p>}
            <input style={{padding: "10px", marginRight: "10px"}} type="text" placeholder='' value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <div className={style.wrapCards}>
            {data.map((item, index) =>{
                return(
                    <div key={index}>
                       <Card name={item.name} image={item.image}/>
                    </div>
                )
            })}
            </div>
        </section>
    )
}
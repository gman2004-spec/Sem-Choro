import style from './Calcs.module.css'
import { useState, useEffect } from 'react'

export default function Calcs() {
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [respSoma, setRespSoma] = useState(null)
  const [respSub, setRespSub] = useState(null)
  const [respMult, setRespMult] = useState(null)
  const [respDiv, setRespDiv] = useState(null)

  const isValidNumber = (val) => !isNaN(parseFloat(val)) && isFinite(val)

  const somar = () => {
    if (isValidNumber(n1) && isValidNumber(n2)) {
      setRespSoma(parseFloat(n1) + parseFloat(n2))
    } else {
      setRespSoma(null)
    }
  }

  const sub = () => {
    if (isValidNumber(n1) && isValidNumber(n2)) {
      setRespSub(parseFloat(n1) - parseFloat(n2))
    } else {
      setRespSub(null)
    }
  }

  const mult = () => {
    if (isValidNumber(n1) && isValidNumber(n2)) {
      setRespMult(parseFloat(n1) * parseFloat(n2))
    } else {
      setRespMult(null)
    }
  }

  const div = () => {
    const num2 = parseFloat(n2)
    if (isValidNumber(n1) && isValidNumber(n2)) {
      if (num2 === 0) {
        setRespDiv("Erro: divisão por zero")
      } else {
        setRespDiv(parseFloat(n1) / num2)
      }
    } else {
      setRespDiv(null)
    }
  }

  const handleAll = () => {
    somar()
    sub()
    mult()
    div()
  }

  return (
    <>
      <h5>
        <a href="/" className={style.backBtn}>voltar</a>
      </h5>
      <h1>Cálculos</h1>
      <br />
      <div>
        <h4>Digite os números para os cálculos</h4>
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
          placeholder='Primeiro número'
        />
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
          placeholder='Segundo número'
        />
      </div>
      <br />
      <div>
        <h4>Respostas</h4>
        <p>
          <button onClick={somar}>Somar</button>
          {respSoma !== null ? ` Resultado: ${respSoma}` : ' Digite números válidos'}
        </p>
        <p>
          <button onClick={sub}>Subtração</button>
          {respSub !== null ? ` Resultado: ${respSub}` : ' Digite números válidos'}
        </p>
        <p>
          <button onClick={mult}>Multiplicação</button>
          {respMult !== null ? ` Resultado: ${respMult}` : ' Digite números válidos'}
        </p>
        <p>
          <button onClick={div}>Divisão</button>
          {typeof respDiv === "string"
            ? ` ${respDiv}`
            : respDiv !== null ? ` Resultado: ${respDiv}` : ' Digite números válidos'}
        </p>
        <br />
        <button onClick={handleAll}>Calcular todas</button>
      </div>
    </>
  )
}

import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { Req } from './Req'
import { Calcs } from './Calcs'
import { Contact } from './Contact'
import { Menu } from './Menu' // Corrigido: Adicionei import do Menu
import style from './App.module.css' // Corrigido: estilo via módulo CSS

function App() {
  const defaultPhoneNumber = "5541999999999"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleZap = () => {
    const { name, email, message } = formData

    const text = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    const encodedText = encodeURIComponent(text)

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=${encodedText}`

    window.open(urlZAPZAP, "_blank")
  }

  // Exemplo de dados para cards (corrigir ou importar de outro lugar se for o caso)
  const cards = [
    { text: "Card 1", maiscoisa: "Descrição do card 1", img: "/img1.jpg" },
    { text: "Card 2", maiscoisa: "Descrição do card 2", img: "/img2.jpg" },
  ]

  return (
    <>
      <Menu option01='Sessão 01' option02='Sessão 02' option03='Mapa e contato' option04='Cálculos' />
      <main>
        <section id='s1' className={style.s1}>
          {cards.map((item, index) => (
            <div key={index} className={style.crdzao}>
              <h5>{item.text}</h5>
              <p>{item.maiscoisa}</p>
              <img src={item.img} alt={item.text} width={200} />
            </div>
          ))}
        </section>

        <section id='s2' className={style.s2}>
          <h2>CONTATO</h2>
          <br />
          <input
            placeholder='Insira seu nome'
            type="text"
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br /><br />
          <input
            placeholder='Insira seu email'
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br /><br />
          <textarea
            placeholder='Insira mensagem'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          />
          <br />
          <button onClick={handleZap}>Enviar mensagem</button>
        </section>
      </main>
    </>
  )
}

export default App


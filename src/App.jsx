import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { Req } from './Req'

function App() {
  const defaultPhoneNumber = "5541999999999"
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank")
  }

    return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Dragon_Ball</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
          <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
          <textarea placeholder='Insira mensagem' id='message' name='message' value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
          <button onClick={handleZap}>Enviar mensagem</button>
      </p>
    </>
  )
}

export default App

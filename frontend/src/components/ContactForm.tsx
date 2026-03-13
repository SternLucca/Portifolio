import { useState } from "react"

export default function ContactForm() {

  const [nome,setNome] = useState("")
  const [email,setEmail] = useState("")
  const [mensagem,setMensagem] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch("http://localhost:3000/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        nome,
        email,
        mensagem
      })
    })

    alert("Mensagem enviada!")
  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nome"
        value={nome}
        onChange={e=>setNome(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />

      <textarea
        placeholder="Mensagem"
        value={mensagem}
        onChange={e=>setMensagem(e.target.value)}
      />

      <button type="submit">
        Enviar
      </button>

    </form>

  )
}
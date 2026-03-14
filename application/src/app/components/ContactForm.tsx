"use client"
import { useState } from "react"

export default function ContactForm() {

    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [mensagem,setMensagem] = useState("")

    async function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        try {
            const response = await fetch("/api/contact",{
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

            const data = await response.json()

            if (!response.ok) {
                alert("Erro: " + data.error)
                return
            }

            alert("Mensagem enviada com sucesso!")

        } catch (error) {
          alert("Erro ao conectar com o servidor")
        }
    }

    return (
        <div className="formularioArea">
            <h2 id="formTitulo">Entre em contato:</h2>
            <form className="formulario" onSubmit={handleSubmit}>

                <div>
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={e=>setNome(e.target.value)}
                        required
                    />

                    <input
                        placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        type="email"
                        required
                    />
                </div>

                <textarea
                    placeholder="Mensagem"
                    value={mensagem}
                    onChange={e=>setMensagem(e.target.value)}
                    required
                />
                
                <div>
                    <button type="submit">
                        Enviar
                    </button>
                </div>

            </form>
        </div>
    )
}
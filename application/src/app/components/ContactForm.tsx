"use client"
import { useState } from "react"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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
                console.log("Erro: " + data.error)
                alert("Erro: " + data.error)
                return
            }

            alert("Mensagem enviada com sucesso!")

        } catch (error) {
            console.log(error)
            alert("Erro ao conectar com o servidor")
        }
    }

    return (
        <form className="text-white bg-[#26292d] w-full h-full" onSubmit={handleSubmit}>
            <h3 className="text-3xl ml-[5vw] mt-[5vh]">Entre em contato:</h3>
            <FieldSet className="ml-[7vw] mr-[7vw] mt-[2vh]">
                <FieldGroup className="flex-row justify-center">
                    <Field className="row-6">
                        <FieldLabel htmlFor="nome">Nome</FieldLabel>
                        <Input
                            type="text"
                            id="nome" 
                            autoComplete="off"
                            onChange={e=>setNome(e.target.value)}
                            required/>
                    </Field>
                    <Field className="row-6">
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            type="email"
                            id="email" 
                            autoComplete="off" 
                            onChange={e=>setEmail(e.target.value)}
                            required/>
                    </Field>
                </FieldGroup>
                <FieldGroup>
                    <FieldLabel htmlFor="mensagem" className="m-0">Mensagem:</FieldLabel>
                    <Textarea 
                        id="mensagem" 
                        className="-mt-3" 
                        onChange={e=>setMensagem(e.target.value)}
                        required></Textarea>
                </FieldGroup>
                <div className="flex justify-center items-center">
                    <Button type="submit" className="w-40 h-15 mb-[4vh] cursor-pointer">Enviar</Button>
                </div>
            </FieldSet>
        </form>
    )
}
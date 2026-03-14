import { NextResponse } from "next/server"
import { pool } from "@/lib/db"

export async function POST(req: Request) {

    try {
        const body = await req.json()

        const { nome, email, mensagem } = body

        if (!nome || !email || !mensagem) {
            return NextResponse.json(
                { error: "Campos obrigatórios faltando" },
                { status: 400 }
            )
        }

        await pool.query(
            "INSERT INTO messages (nome,email,mensagem) VALUES ($1,$2,$3)",
            [nome, email, mensagem]
        )

        return NextResponse.json(
            { success: true },
            { status: 200 }
        )

    } catch (error) {

        console.error("Erro ao salvar mensagem:", error)

        return NextResponse.json(
            { error: "Erro interno do servidor" },
            { status: 500 }
        )
    }
}
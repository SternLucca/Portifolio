import { NextResponse } from "next/server"
import { pool } from "@/lib/db"

export async function POST(req: Request) {
  const body = await req.json()

  const { nome, email, mensagem } = body

  await pool.query(
    "INSERT INTO messages (nome,email,mensagem) VALUES ($1,$2,$3)",
    [nome, email, mensagem]
  )

  return NextResponse.json({ success: true })
}
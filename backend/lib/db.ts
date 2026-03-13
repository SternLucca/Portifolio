import { Pool } from "pg"

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "senha",
  port: 5432
})
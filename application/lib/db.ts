import { Pool } from "pg"

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "260808",
  port: 5432
})
import { migrate } from "drizzle-orm/mysql2/migrator"
import { db } from "./db"

// Função para executar as migrações
export async function runMigrations() {
  console.log("Running migrations...")

  try {
    await migrate(db, { migrationsFolder: "drizzle" })
    console.log("Migrations completed successfully")
  } catch (error) {
    console.error("Error running migrations:", error)
    throw error
  }
}


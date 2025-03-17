import connection from "../db"
import { users } from "../db-schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

export type UserInput = {
  name: string
  email: string
  password: string
  phone?: string
  address?: string
  city?: string
  state?: string
  postalCode?: string
  role?: string
}

export async function getAllUsers() {
  try {
    const [rows] = await connection.query("SELECT * FROM users")
    return rows
  } catch (error) {
    console.error("Error fetching users:", error)
    throw error
  }
}

export async function getUserById(id: number) {
  try {
    const result = await connection.query("SELECT * FROM users WHERE id = ?", [id]).then(rows => rows[0] || null)
    return result
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error)
    throw error
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await connection.query("SELECT * FROM users WHERE email = ?", [email]).then(rows => rows[0] || null)
    return result
  } catch (error) {
    console.error(`Error fetching user with email ${email}:`, error)
    throw error
  }
}

export async function createUser(userData: UserInput) {
  try {
    // Verificar se o email já existe
    const existingUser = await getUserByEmail(userData.email)
    if (existingUser) {
      throw new Error("Email already exists")
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(userData.password, 10)

    const result = await connection.query("INSERT INTO users SET ?", {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      phone: userData.phone || null,
      address: userData.address || null,
      city: userData.city || null,
      state: userData.state || null,
      postalCode: userData.postalCode || null,
      role: (userData.role as any) || "cliente",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return result
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export async function updateUser(id: number, userData: Partial<UserInput>) {
  try {
    // Se a senha estiver sendo atualizada, hash ela
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10)
    }

    const result = await connection.query("UPDATE users SET ? WHERE id = ?", [
      {
        ...userData,
        updatedAt: new Date(),
      },
      id
    ])

    return await getUserById(id)
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error)
    throw error
  }
}

export async function deleteUser(id: number) {
  try {
    const result = await connection.query("DELETE FROM users WHERE id = ?", [id])
    return result
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error)
    throw error
  }
}

export async function verifyUserCredentials(email: string, password: string) {
  try {
    const user = await getUserByEmail(email)
    if (!user) {
      return null
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return null
    }

    // Não retornar a senha
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
  } catch (error) {
    console.error("Error verifying user credentials:", error)
    throw error
  }
}


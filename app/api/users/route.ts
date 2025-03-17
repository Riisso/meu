import { type NextRequest, NextResponse } from "next/server"
import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from "@/lib/services/user-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const email = searchParams.get("email")

    if (id) {
      const user = await getUserById(Number(id))
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }
      // Não retornar a senha
      const { password, ...userWithoutPassword } = user
      return NextResponse.json(userWithoutPassword)
    }

    if (email) {
      const user = await getUserByEmail(email)
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }
      // Não retornar a senha
      const { password, ...userWithoutPassword } = user
      return NextResponse.json(userWithoutPassword)
    }

    const users = await getAllUsers()
    // Não retornar as senhas
    const usersWithoutPasswords = users.map((user) => {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword
    })
    return NextResponse.json(usersWithoutPasswords)
  } catch (error) {
    console.error("Error in users API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const result = await createUser(data)
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("Error creating user:", error)
    if (error.message === "Email already exists") {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const data = await request.json()
    const result = await updateUser(Number(id), data)
    // Não retornar a senha
    const { password, ...userWithoutPassword } = result
    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error("Error updating user:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    await deleteUser(Number(id))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting user:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


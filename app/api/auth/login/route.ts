import { type NextRequest, NextResponse } from "next/server"
import { verifyUserCredentials } from "@/lib/services/user-service"
import { cookies } from "next/headers"
import { sign } from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const user = await verifyUserCredentials(email, password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Criar um token JWT
    const token = sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" },
    )

    // Definir o cookie
    cookies().set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 dia
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error("Error in login API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


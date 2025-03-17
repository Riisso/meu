import { type NextRequest, NextResponse } from "next/server"
import { createUser } from "@/lib/services/user-service"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.name || !data.email || !data.password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    const result = await createUser(data)
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Error in register API:", error)
    if (error.message === "Email already exists") {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


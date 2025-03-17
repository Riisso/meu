import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    // Remover o cookie
    cookies().delete("auth_token")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in logout API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


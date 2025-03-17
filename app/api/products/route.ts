import { type NextRequest, NextResponse } from "next/server"
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/lib/services/product-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const category = searchParams.get("category")
    const query = searchParams.get("query")

    if (id) {
      const product = await getProductById(Number(id))
      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 })
      }
      return NextResponse.json(product)
    }

    if (category) {
      const products = await getProductsByCategory(category)
      return NextResponse.json(products)
    }

    if (query) {
      const products = await searchProducts(query)
      return NextResponse.json(products)
    }

    const products = await getAllProducts()
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error in products API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const result = await createProduct(data)
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const data = await request.json()
    const result = await updateProduct(Number(id), data)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    await deleteProduct(Number(id))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


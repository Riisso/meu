import { db } from "../db"
import { products } from "../db-schema"
import { eq, like, or } from "drizzle-orm"

export type ProductInput = {
  name: string
  description: string
  price: number
  category: string
  stock: number
  status: string
  images?: string[]
  specifications?: Record<string, string>
}

export async function getAllProducts() {
  try {
    return await db.select().from(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export async function getProductById(id: number) {
  try {
    const result = await db.select().from(products).where(eq(products.id, id)).limit(1)
    return result[0] || null
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    throw error
  }
}

export async function getProductsByCategory(category: string) {
  try {
    return await db
      .select()
      .from(products)
      .where(eq(products.category, category as any))
  } catch (error) {
    console.error(`Error fetching products with category ${category}:`, error)
    throw error
  }
}

export async function searchProducts(query: string) {
  try {
    return await db
      .select()
      .from(products)
      .where(or(like(products.name, `%${query}%`), like(products.description, `%${query}%`)))
  } catch (error) {
    console.error(`Error searching products with query ${query}:`, error)
    throw error
  }
}

export async function createProduct(productData: ProductInput) {
  try {
    const result = await db.insert(products).values({
      name: productData.name,
      description: productData.description,
      price: productData.price,
      category: productData.category as any,
      stock: productData.stock,
      status: productData.status as any,
      images: productData.images,
      specifications: productData.specifications,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return result
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}

export async function updateProduct(id: number, productData: Partial<ProductInput>) {
  try {
    await db
      .update(products)
      .set({
        ...productData,
        updatedAt: new Date(),
      })
      .where(eq(products.id, id))

    return await getProductById(id)
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error)
    throw error
  }
}

export async function deleteProduct(id: number) {
  try {
    return await db.delete(products).where(eq(products.id, id))
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error)
    throw error
  }
}

export async function updateProductStock(id: number, quantity: number) {
  try {
    const product = await getProductById(id)
    if (!product) {
      throw new Error(`Product with id ${id} not found`)
    }

    const newStock = product.stock + quantity

    await db
      .update(products)
      .set({
        stock: newStock,
        status: newStock > 0 ? "ativo" : "esgotado",
        updatedAt: new Date(),
      })
      .where(eq(products.id, id))

    return await getProductById(id)
  } catch (error) {
    console.error(`Error updating stock for product with id ${id}:`, error)
    throw error
  }
}


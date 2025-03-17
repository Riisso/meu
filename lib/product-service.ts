import connection from "../db"

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
    const [rows] = await connection.query("SELECT * FROM products")
    return rows
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export async function getProductById(id: number) {
  try {
    const [rows] = await connection.query("SELECT * FROM products WHERE id = ?", [id])
    return rows[0] || null
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    throw error
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const [rows] = await connection.query("SELECT * FROM products WHERE category = ?", [category])
    return rows
  } catch (error) {
    console.error(`Error fetching products with category ${category}:`, error)
    throw error
  }
}

export async function searchProducts(query: string) {
  try {
    const [rows] = await connection.query("SELECT * FROM products WHERE name LIKE ? OR description LIKE ?", [
      `%${query}%`,
      `%${query}%`
    ])
    return rows
  } catch (error) {
    console.error(`Error searching products with query ${query}:`, error)
    throw error
  }
}

export async function createProduct(productData: ProductInput) {
  try {
    const [result] = await connection.query("INSERT INTO products SET ?", {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      category: productData.category,
      stock: productData.stock,
      status: productData.status,
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
    await connection.query("UPDATE products SET ? WHERE id = ?", [
      {
        ...productData,
        updatedAt: new Date(),
      },
      id
    ])

    return await getProductById(id)
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error)
    throw error
  }
}

export async function deleteProduct(id: number) {
  try {
    await connection.query("DELETE FROM products WHERE id = ?", [id])
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

    await connection.query("UPDATE products SET stock = ?, status = ? WHERE id = ?", [
      newStock,
      newStock > 0 ? "ativo" : "esgotado",
      id
    ])

    return await getProductById(id)
  } catch (error) {
    console.error(`Error updating stock for product with id ${id}:`, error)
    throw error
  }
}


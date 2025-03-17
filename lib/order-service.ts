import connection from "../db"
import { orders, orderItems } from "../db-schema"
import { eq } from "drizzle-orm"

export type OrderInput = {
  userId: number
  status?: string
  total: number
  paymentMethod: string
  paymentStatus?: boolean
  shippingAddress: string
  shippingCity: string
  shippingState: string
  shippingPostalCode: string
  trackingNumber?: string
  notes?: string
  items: Array<{
    productId: number
    quantity: number
    price: number
  }>
}

export async function getAllOrders() {
  try {
    const [rows] = await connection.query("SELECT * FROM orders")
    return rows
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getOrderById(id: number) {
  try {
    const result = await connection.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [id])
    return result[0] || null
  } catch (error) {
    console.error(`Error fetching order with id ${id}:`, error)
    throw error
  }
}

export async function getOrdersByUserId(userId: number) {
  try {
    const result = await connection.query("SELECT * FROM orders WHERE userId = ?", [userId])
    return result
  } catch (error) {
    console.error(`Error fetching orders for user ${userId}:`, error)
    throw error
  }
}

export async function getOrderItems(orderId: number) {
  try {
    const result = await connection.query("SELECT * FROM orderItems WHERE orderId = ?", [orderId])
    return result
  } catch (error) {
    console.error(`Error fetching items for order ${orderId}:`, error)
    throw error
  }
}

export async function createOrder(orderData: OrderInput) {
  try {
    const [result] = await connection.query("INSERT INTO orders SET ?", {
      userId: orderData.userId,
      status: orderData.status || "pendente",
      total: orderData.total,
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentStatus || false,
      shippingAddress: orderData.shippingAddress,
      shippingCity: orderData.shippingCity,
      shippingState: orderData.shippingState,
      shippingPostalCode: orderData.shippingPostalCode,
      trackingNumber: orderData.trackingNumber || null,
      notes: orderData.notes || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return result.insertId
  } catch (error) {
    console.error("Error creating order:", error)
    throw error
  }
}

export async function updateOrderStatus(id: number, status: string) {
  try {
    await connection.query("UPDATE orders SET status = ?, updatedAt = ? WHERE id = ?", [status, new Date(), id])
    return await getOrderById(id)
  } catch (error) {
    console.error(`Error updating status for order ${id}:`, error)
    throw error
  }
}

export async function updatePaymentStatus(id: number, paymentStatus: boolean) {
  try {
    await connection.query("UPDATE orders SET paymentStatus = ?, updatedAt = ? WHERE id = ?", [paymentStatus, new Date(), id])
    return await getOrderById(id)
  } catch (error) {
    console.error(`Error updating payment status for order ${id}:`, error)
    throw error
  }
}

export async function updateTrackingNumber(id: number, trackingNumber: string) {
  try {
    await connection.query("UPDATE orders SET trackingNumber = ?, updatedAt = ? WHERE id = ?", [trackingNumber, new Date(), id])
    return await getOrderById(id)
  } catch (error) {
    console.error(`Error updating tracking number for order ${id}:`, error)
    throw error
  }
}


import { db } from "../db"
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
    return await db.select().from(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getOrderById(id: number) {
  try {
    const result = await db.select().from(orders).where(eq(orders.id, id)).limit(1)
    return result[0] || null
  } catch (error) {
    console.error(`Error fetching order with id ${id}:`, error)
    throw error
  }
}

export async function getOrdersByUserId(userId: number) {
  try {
    return await db.select().from(orders).where(eq(orders.userId, userId))
  } catch (error) {
    console.error(`Error fetching orders for user ${userId}:`, error)
    throw error
  }
}

export async function getOrderItems(orderId: number) {
  try {
    return await db.select().from(orderItems).where(eq(orderItems.orderId, orderId))
  } catch (error) {
    console.error(`Error fetching items for order ${orderId}:`, error)
    throw error
  }
}

export async function createOrder(orderData: OrderInput) {
  try {
    // Iniciar uma transação
    const result = await db.transaction(async (tx) => {
      // Inserir o pedido
      const orderResult = await tx.insert(orders).values({
        userId: orderData.userId,
        status: (orderData.status as any) || "pendente",
        total: orderData.total,
        paymentMethod: orderData.paymentMethod as any,
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

      const orderId = Number(orderResult.insertId)

      // Inserir os itens do pedido
      for (const item of orderData.items) {
        await tx.insert(orderItems).values({
          orderId,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          createdAt: new Date(),
        })

        // Atualizar o estoque do produto
        // Isso seria feito através do serviço de produtos em uma aplicação real
        // Aqui estamos simplificando para o exemplo
      }

      return orderId
    })

    return result
  } catch (error) {
    console.error("Error creating order:", error)
    throw error
  }
}

export async function updateOrderStatus(id: number, status: string) {
  try {
    await db
      .update(orders)
      .set({
        status: status as any,
        updatedAt: new Date(),
      })
      .where(eq(orders.id, id))

    return await getOrderById(id)
  } catch (error) {
    console.error(`Error updating status for order ${id}:`, error)
    throw error
  }
}

export async function updatePaymentStatus(id: number, paymentStatus: boolean) {
  try {
    await db
      .update(orders)
      .set({
        paymentStatus,
        updatedAt: new Date(),
      })
      .where(eq(orders.id, id))

    return await getOrderById(id)
  } catch (error) {
    console.error(`Error updating payment status for order ${id}:`, error)
    throw error
  }
}

export async function updateTrackingNumber(id: number, trackingNumber: string) {
  try {
    await db
      .update(orders)
      .set({
        trackingNumber,
        updatedAt: new Date(),
      })
      .where(eq(orders.id, id))

    return await getOrderById(id)
  } catch (error) {
    console.error(`Error updating tracking number for order ${id}:`, error)
    throw error
  }
}


import { type NextRequest, NextResponse } from "next/server"
import {
  getAllOrders,
  getOrderById,
  getOrdersByUserId,
  getOrderItems,
  createOrder,
  updateOrderStatus,
  updatePaymentStatus,
  updateTrackingNumber,
} from "@/lib/services/order-service"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const userId = searchParams.get("userId")
    const items = searchParams.get("items")

    if (id) {
      const order = await getOrderById(Number(id))
      if (!order) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 })
      }

      if (items === "true") {
        const orderItems = await getOrderItems(Number(id))
        return NextResponse.json({ ...order, items: orderItems })
      }

      return NextResponse.json(order)
    }

    if (userId) {
      const orders = await getOrdersByUserId(Number(userId))
      return NextResponse.json(orders)
    }

    const orders = await getAllOrders()
    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error in orders API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const result = await createOrder(data)
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const action = searchParams.get("action")

    if (!id) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 })
    }

    const data = await request.json()

    if (action === "status") {
      const result = await updateOrderStatus(Number(id), data.status)
      return NextResponse.json(result)
    }

    if (action === "payment") {
      const result = await updatePaymentStatus(Number(id), data.paymentStatus)
      return NextResponse.json(result)
    }

    if (action === "tracking") {
      const result = await updateTrackingNumber(Number(id), data.trackingNumber)
      return NextResponse.json(result)
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


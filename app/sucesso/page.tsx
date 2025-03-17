import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Printer, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Pedido Confirmado | Películas Premium",
  description: "Seu pedido foi confirmado com sucesso.",
}

export default function OrderSuccessPage() {
  // Em um ambiente real, buscaríamos os dados do pedido
  // Para este exemplo, usaremos dados estáticos
  const order = {
    id: "10051",
    date: "17/03/2023",
    total: 314.98,
    paymentMethod: "Cartão de Crédito",
    items: [
      {
        name: "Película Fumê Profissional",
        quantity: 1,
        price: 249.99,
      },
      {
        name: "Película Residencial de Controle Solar",
        quantity: 1,
        price: 89.99,
      },
    ],
    shipping: {
      address: "Rua das Flores, 123",
      neighborhood: "Centro",
      city: "Rio de Janeiro",
      state: "RJ",
      postalCode: "20000-000",
      recipient: "Carlos Mendes",
    },
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Pedido Confirmado!</h1>
          <p className="text-muted-foreground mt-2">Seu pedido #{order.id} foi recebido e está sendo processado.</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Resumo do Pedido</CardTitle>
            <CardDescription>Pedido realizado em {order.date}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground"> x{item.quantity}</span>
                  </div>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>R$ {(order.total + 25).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Desconto</span>
                <span className="text-green-600">-R$ 25,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frete</span>
                <span className="text-green-600">Grátis</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>R$ {order.total.toFixed(2)}</span>
            </div>

            <div className="pt-2">
              <span className="text-sm text-muted-foreground">Forma de pagamento:</span>
              <span className="text-sm font-medium ml-2">{order.paymentMethod}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Informações de Entrega</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="font-medium">{order.shipping.recipient}</p>
              <p>{order.shipping.address}</p>
              <p>
                {order.shipping.neighborhood}, {order.shipping.city} - {order.shipping.state}
              </p>
              <p>CEP: {order.shipping.postalCode}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="flex items-center">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir Pedido
          </Button>
          <Link href="/conta/pedidos">
            <Button variant="outline" className="flex items-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Meus Pedidos
            </Button>
          </Link>
          <Link href="/">
            <Button className="flex items-center">
              Continuar Comprando
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


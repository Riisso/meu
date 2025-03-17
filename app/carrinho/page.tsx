import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Carrinho de Compras | Películas Premium",
  description: "Revise os itens em seu carrinho e prossiga para o checkout.",
}

export default function CartPage() {
  // Em um ambiente real, buscaríamos os dados do carrinho do usuário
  // Para este exemplo, usaremos dados estáticos
  const cartItems = [
    {
      id: "1",
      name: "Película Fumê Profissional",
      category: "Veicular",
      price: 249.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "Película Residencial de Controle Solar",
      category: "Residencial",
      price: 89.99,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Frete grátis
  const discount = 25 // Desconto de exemplo
  const total = subtotal + shipping - discount

  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Itens */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-muted/50">
                <div className="col-span-6">
                  <span className="font-medium">Produto</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-medium">Preço</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-medium">Quantidade</span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="font-medium">Subtotal</span>
                </div>
              </div>

              {cartItems.map((item, index) => (
                <div key={item.id} className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center space-x-4">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden border">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <Link href={`/produto/${item.id}`} className="font-medium hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                      <span className="md:hidden font-medium">Preço:</span>
                      <span>R$ {item.price.toFixed(2)}</span>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                      <span className="md:hidden font-medium">Quantidade:</span>
                      <div className="flex items-center border rounded-md">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                      <span className="md:hidden font-medium">Subtotal:</span>
                      <div className="flex items-center">
                        <span className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-2 h-8 w-8 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex space-x-2">
                  <Input placeholder="Código de cupom" />
                  <Button variant="outline">Aplicar</Button>
                </div>
              </div>
              <div>
                <Button variant="outline">Continuar Comprando</Button>
              </div>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Desconto</span>
                    <span className="text-green-600">-R$ {discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Em até 12x de R$ {(total / 12).toFixed(2)} sem juros
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Finalizar Compra
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
          <p className="text-muted-foreground mb-6">
            Parece que você ainda não adicionou nenhum produto ao seu carrinho.
          </p>
          <Link href="/produtos">
            <Button size="lg">
              Explorar Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}


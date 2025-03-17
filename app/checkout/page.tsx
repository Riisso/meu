import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, LockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Checkout | Películas Premium",
  description: "Complete seu pedido com segurança.",
}

export default function CheckoutPage() {
  // Em um ambiente real, buscaríamos os dados do carrinho do usuário
  // Para este exemplo, usaremos dados estáticos
  const cartItems = [
    {
      id: "1",
      name: "Película Fumê Profissional",
      category: "Veicular",
      price: 249.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Película Residencial de Controle Solar",
      category: "Residencial",
      price: 89.99,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Frete grátis
  const discount = 25 // Desconto de exemplo
  const total = subtotal + shipping - discount

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex items-center mb-6">
        <Link
          href="/carrinho"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o carrinho
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário de Checkout */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Preencha seus dados para entrega e contato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Endereço de Entrega</CardTitle>
              <CardDescription>Informe o endereço para entrega dos produtos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number">Número</Label>
                  <Input id="number" placeholder="123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input id="address" placeholder="Rua, Avenida, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="complement">Complemento</Label>
                <Input id="complement" placeholder="Apto, Bloco, etc. (opcional)" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input id="neighborhood" placeholder="Seu bairro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" placeholder="Sua cidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" placeholder="UF" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forma de Pagamento</CardTitle>
              <CardDescription>Escolha como deseja pagar</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="credit-card" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="credit-card">Cartão de Crédito</TabsTrigger>
                  <TabsTrigger value="boleto">Boleto</TabsTrigger>
                  <TabsTrigger value="pix">Pix</TabsTrigger>
                </TabsList>
                <TabsContent value="credit-card" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número do Cartão</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nome no Cartão</Label>
                      <Input id="card-name" placeholder="Nome como está no cartão" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="installments">Parcelas</Label>
                    <RadioGroup defaultValue="1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="installment-1" />
                        <Label htmlFor="installment-1">1x de R$ {total.toFixed(2)} sem juros</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="installment-3" />
                        <Label htmlFor="installment-3">3x de R$ {(total / 3).toFixed(2)} sem juros</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6" id="installment-6" />
                        <Label htmlFor="installment-6">6x de R$ {(total / 6).toFixed(2)} sem juros</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="12" id="installment-12" />
                        <Label htmlFor="installment-12">12x de R$ {(total / 12).toFixed(2)} sem juros</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>
                <TabsContent value="boleto" className="mt-4">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      O boleto será gerado após a confirmação do pedido e terá vencimento em 3 dias úteis.
                    </p>
                    <p className="font-medium">Valor total: R$ {total.toFixed(2)}</p>
                  </div>
                </TabsContent>
                <TabsContent value="pix" className="mt-4">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      O QR Code do Pix será gerado após a confirmação do pedido.
                    </p>
                    <div className="bg-muted mx-auto w-40 h-40 flex items-center justify-center rounded-lg mb-4">
                      QR Code Pix
                    </div>
                    <p className="font-medium">Valor total: R$ {total.toFixed(2)}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Resumo do Pedido */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qtd: {item.quantity}</p>
                      <p className="text-sm font-medium">R$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
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
              </div>

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>

              <Button className="w-full" size="lg">
                <LockIcon className="mr-2 h-4 w-4" />
                Finalizar Compra
              </Button>

              <div className="flex items-center justify-center text-xs text-muted-foreground">
                <CreditCard className="mr-1 h-3 w-3" />
                <span>Pagamento 100% seguro</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


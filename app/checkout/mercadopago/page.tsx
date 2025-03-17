import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, LockIcon, QrCode, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Checkout Mercado Pago | Películas Premium",
  description: "Complete seu pagamento com segurança usando Mercado Pago.",
}

export default function MercadoPagoCheckoutPage() {
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
          href="/checkout"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o checkout
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário de Pagamento */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="bg-[#009ee3] text-white">
              <div className="flex items-center space-x-2">
                <Image src="/placeholder.svg?height=30&width=120" alt="Mercado Pago" width={120} height={30} />
                <CardTitle>Checkout Seguro</CardTitle>
              </div>
              <CardDescription className="text-white/80">Escolha como deseja pagar sua compra</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="credit-card" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="credit-card" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Cartão
                  </TabsTrigger>
                  <TabsTrigger value="pix" className="flex items-center">
                    <QrCode className="mr-2 h-4 w-4" />
                    Pix
                  </TabsTrigger>
                  <TabsTrigger value="wallet" className="flex items-center">
                    <Wallet className="mr-2 h-4 w-4" />
                    Saldo
                  </TabsTrigger>
                </TabsList>

                {/* Cartão de Crédito */}
                <TabsContent value="credit-card" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Número do Cartão</Label>
                      <div className="relative">
                        <Input id="card-number" placeholder="0000 0000 0000 0000" />
                        <div className="absolute right-3 top-2.5 flex items-center space-x-1">
                          <div className="w-6 h-4 bg-muted rounded"></div>
                          <div className="w-6 h-4 bg-muted rounded"></div>
                          <div className="w-6 h-4 bg-muted rounded"></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">Código de Segurança</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nome no Cartão</Label>
                      <Input id="card-name" placeholder="Nome como está no cartão" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF do Titular</Label>
                      <Input id="cpf" placeholder="000.000.000-00" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="installments">Parcelas</Label>
                      <RadioGroup defaultValue="1">
                        <div className="flex items-center justify-between border p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="installment-1" />
                            <Label htmlFor="installment-1">1x de R$ {total.toFixed(2)}</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">sem juros</span>
                        </div>
                        <div className="flex items-center justify-between border p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3" id="installment-3" />
                            <Label htmlFor="installment-3">3x de R$ {(total / 3).toFixed(2)}</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">sem juros</span>
                        </div>
                        <div className="flex items-center justify-between border p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6" id="installment-6" />
                            <Label htmlFor="installment-6">6x de R$ {(total / 6).toFixed(2)}</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">sem juros</span>
                        </div>
                        <div className="flex items-center justify-between border p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="12" id="installment-12" />
                            <Label htmlFor="installment-12">12x de R$ {(total / 12).toFixed(2)}</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">sem juros</span>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <Button className="w-full bg-[#009ee3] hover:bg-[#008acd]" size="lg">
                    <LockIcon className="mr-2 h-4 w-4" />
                    Pagar R$ {total.toFixed(2)}
                  </Button>
                </TabsContent>

                {/* PIX */}
                <TabsContent value="pix" className="space-y-6 mt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-muted mx-auto w-48 h-48 flex items-center justify-center rounded-lg">
                      <QrCode className="h-24 w-24 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Pague com PIX</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Escaneie o QR Code com o aplicativo do seu banco ou copie o código abaixo
                      </p>
                      <div className="flex">
                        <Input
                          value="00020126580014br.gov.bcb.pix0136a629532e-7693-4846-852d-1bbff817b5a8520400005303986540510.005802BR5909TestStore6009SAO PAULO62090505123456304E2CA"
                          readOnly
                          className="bg-muted"
                        />
                        <Button variant="outline" className="ml-2">
                          Copiar
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-4 text-left">
                      <h4 className="font-medium mb-2">Instruções:</h4>
                      <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                        <li>Abra o aplicativo do seu banco</li>
                        <li>Escolha pagar via PIX com QR Code</li>
                        <li>Escaneie o código acima ou cole o código copiado</li>
                        <li>Confirme as informações e finalize o pagamento</li>
                      </ol>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      O pagamento será confirmado automaticamente em até 1 minuto
                    </p>
                  </div>

                  <Button className="w-full bg-[#009ee3] hover:bg-[#008acd]" size="lg">
                    Já realizei o pagamento
                  </Button>
                </TabsContent>

                {/* Saldo Mercado Pago */}
                <TabsContent value="wallet" className="space-y-6 mt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h3 className="font-medium text-lg mb-2">Pague com seu saldo no Mercado Pago</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Você será redirecionado para o site do Mercado Pago para concluir o pagamento
                      </p>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <Wallet className="h-6 w-6 text-[#009ee3]" />
                        <span className="font-medium">Saldo disponível: R$ 500,00</span>
                      </div>
                      <div className="border rounded-md p-4 text-left">
                        <h4 className="font-medium mb-2">Como funciona:</h4>
                        <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                          <li>Clique no botão "Pagar com Mercado Pago" abaixo</li>
                          <li>Faça login na sua conta Mercado Pago</li>
                          <li>Confirme o pagamento</li>
                          <li>Você será redirecionado de volta para nossa loja</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#009ee3] hover:bg-[#008acd]" size="lg">
                    <LockIcon className="mr-2 h-4 w-4" />
                    Pagar com Mercado Pago
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="flex items-center justify-center mt-6 text-xs text-muted-foreground">
                <LockIcon className="mr-1 h-3 w-3" />
                <span>Pagamento 100% seguro processado pelo Mercado Pago</span>
              </div>
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

              <div className="pt-4 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <LockIcon className="mr-2 h-4 w-4" />
                  Seus dados estão protegidos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


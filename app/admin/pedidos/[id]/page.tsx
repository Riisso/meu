import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Download, Mail, MapPin, Phone, Printer, Truck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Detalhes do Pedido | Painel Administrativo",
  description: "Visualize e gerencie os detalhes de um pedido específico.",
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // Em um ambiente real, buscaríamos os dados do pedido com base no ID
  // Para este exemplo, usaremos dados estáticos
  const order = {
    id: params.id,
    date: "25/06/2023",
    time: "14:32",
    status: "Em Processamento",
    paymentStatus: "Pago",
    paymentMethod: "Cartão de Crédito",
    total: 349.99,
    subtotal: 349.99,
    shipping: 0,
    discount: 0,
    customer: {
      name: "Carlos Mendes",
      email: "carlos.mendes@email.com",
      phone: "(21) 99876-5432",
      address: "Rua das Flores, 123",
      neighborhood: "Centro",
      city: "Rio de Janeiro",
      state: "RJ",
      postalCode: "20000-000",
    },
    items: [
      {
        id: "1",
        name: "Película Fumê Profissional",
        sku: "PEL-FUM-001",
        price: 249.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "3",
        name: "Película Anti-Risco Premium",
        sku: "PEL-ANT-003",
        price: 99.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    timeline: [
      {
        date: "25/06/2023",
        time: "14:32",
        status: "Pedido Realizado",
        description: "Pedido recebido",
      },
      {
        date: "25/06/2023",
        time: "14:35",
        status: "Pagamento Aprovado",
        description: "Pagamento aprovado via Cartão de Crédito",
      },
      {
        date: "25/06/2023",
        time: "16:20",
        status: "Em Processamento",
        description: "Pedido está sendo preparado para envio",
      },
    ],
    notes: "Cliente solicitou entrega no período da manhã.",
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link href="/admin/pedidos" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Pedido #{order.id}</h2>
          </div>
          <p className="text-muted-foreground">
            Realizado em {order.date} às {order.time}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm">Atualizar Pedido</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Status do Pedido */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Status do Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Status Atual</p>
                <Select defaultValue={order.status.toLowerCase().replace(/\s+/g, "-")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="em-processamento">Em Processamento</SelectItem>
                    <SelectItem value="enviado">Enviado</SelectItem>
                    <SelectItem value="entregue">Entregue</SelectItem>
                    <SelectItem value="cancelado">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Status do Pagamento</p>
                <Badge variant={order.paymentStatus === "Pago" ? "success" : "destructive"}>
                  {order.paymentStatus}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Método de Pagamento</p>
                <p className="text-sm">{order.paymentMethod}</p>
              </div>
              <Button className="w-full">Atualizar Status</Button>
            </div>
          </CardContent>
        </Card>

        {/* Informações do Cliente */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Informações do Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{order.customer.name}</p>
                  <p className="text-sm text-muted-foreground">Cliente desde Jun 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <p className="text-sm">{order.customer.email}</p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <p className="text-sm">{order.customer.phone}</p>
              </div>
              <Separator />
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm">
                  <p>{order.customer.address}</p>
                  <p>{order.customer.neighborhood}</p>
                  <p>
                    {order.customer.city} - {order.customer.state}
                  </p>
                  <p>CEP: {order.customer.postalCode}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </Button>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Ver Cliente
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo do Pedido */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Resumo do Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-sm font-medium">R$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Frete</span>
                <span className="text-sm font-medium">
                  {order.shipping > 0 ? `R$ ${order.shipping.toFixed(2)}` : "Grátis"}
                </span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Desconto</span>
                  <span className="text-sm font-medium text-green-600">-R$ {order.discount.toFixed(2)}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold">R$ {order.total.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Pedido realizado em {order.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>às {order.time}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="items" className="space-y-4">
        <TabsList>
          <TabsTrigger value="items">Itens do Pedido</TabsTrigger>
          <TabsTrigger value="timeline">Linha do Tempo</TabsTrigger>
          <TabsTrigger value="shipping">Entrega</TabsTrigger>
          <TabsTrigger value="notes">Notas</TabsTrigger>
        </TabsList>

        {/* Aba de Itens do Pedido */}
        <TabsContent value="items">
          <Card>
            <CardHeader>
              <CardTitle>Itens do Pedido</CardTitle>
              <CardDescription>Lista de produtos incluídos neste pedido.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">R$ {item.price.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">Qtd: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <Button variant="outline" size="sm">
                          Ver Produto
                        </Button>
                        <p className="font-medium">Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Linha do Tempo */}
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Linha do Tempo do Pedido</CardTitle>
              <CardDescription>Histórico de status e atualizações do pedido.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.timeline.map((event, index) => (
                  <div key={index} className="relative pl-6 pb-4">
                    {/* Linha vertical */}
                    {index < order.timeline.length - 1 && (
                      <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-border" />
                    )}
                    {/* Círculo */}
                    <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.date} às {event.time}
                        </p>
                      </div>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}

                {/* Adicionar novo evento */}
                <div className="mt-6 space-y-4">
                  <h4 className="text-sm font-medium">Adicionar Atualização</h4>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="processing">Em Processamento</SelectItem>
                        <SelectItem value="shipped">Enviado</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                        <SelectItem value="cancelled">Cancelado</SelectItem>
                        <SelectItem value="refunded">Reembolsado</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Descrição da atualização..." />
                    <Button>Adicionar Atualização</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Entrega */}
        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Entrega</CardTitle>
              <CardDescription>Detalhes de envio e rastreamento do pedido.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Método de Envio</p>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o método" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedex">SEDEX</SelectItem>
                        <SelectItem value="pac">PAC</SelectItem>
                        <SelectItem value="transportadora">Transportadora</SelectItem>
                        <SelectItem value="retirada">Retirada na Loja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Código de Rastreamento</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ex: BR1234567890"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button>Salvar</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Endereço de Entrega</p>
                  <div className="border rounded-md p-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div className="text-sm">
                        <p>{order.customer.name}</p>
                        <p>{order.customer.address}</p>
                        <p>{order.customer.neighborhood}</p>
                        <p>
                          {order.customer.city} - {order.customer.state}
                        </p>
                        <p>CEP: {order.customer.postalCode}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-muted-foreground" />
                    <p className="font-medium">Status da Entrega</p>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Status Atual</p>
                        <Badge>Em Processamento</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Previsão de Entrega</p>
                        <input
                          type="date"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <Button className="w-full">Atualizar Informações de Entrega</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Notas */}
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Notas do Pedido</CardTitle>
              <CardDescription>Adicione notas internas ou observações sobre este pedido.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <p className="text-sm font-medium mb-2">Notas Atuais:</p>
                  <p className="text-sm">{order.notes || "Nenhuma nota adicionada."}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Adicionar Nova Nota:</p>
                  <Textarea placeholder="Digite uma nova nota sobre este pedido..." className="min-h-32" />
                  <div className="flex justify-end">
                    <Button>Salvar Nota</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpDown, Download, Eye, Filter, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Pedidos de Marketplaces | Painel Administrativo",
  description: "Gerencie pedidos de todos os marketplaces integrados.",
}

export default function MarketplaceOrdersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Pedidos de Marketplaces</h2>
          <p className="text-muted-foreground">
            Gerencie pedidos de todos os marketplaces integrados em um único lugar.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Sincronizar Pedidos
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-1 items-center space-x-2">
          <Input placeholder="Buscar por ID, cliente ou marketplace..." className="w-[300px]" />
          <Button variant="outline">Buscar</Button>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Marketplace" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="mercadolivre">Mercado Livre</SelectItem>
              <SelectItem value="amazon">Amazon</SelectItem>
              <SelectItem value="shopee">Shopee</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="processing">Em Processamento</SelectItem>
              <SelectItem value="shipped">Enviado</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="mercadolivre">Mercado Livre</TabsTrigger>
          <TabsTrigger value="amazon">Amazon</TabsTrigger>
          <TabsTrigger value="shopee">Shopee</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Todos os Pedidos</CardTitle>
              <CardDescription>Visualize e gerencie pedidos de todos os marketplaces.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID do Pedido</TableHead>
                    <TableHead>Marketplace</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="relative h-6 w-6 rounded-md overflow-hidden border">
                            <Image
                              src={`/placeholder.svg?height=24&width=24&text=${order.marketplaceIcon}`}
                              alt={order.marketplace}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span>{order.marketplace}</span>
                        </div>
                      </TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "Entregue"
                              ? "success"
                              : order.status === "Cancelado"
                                ? "destructive"
                                : order.status === "Enviado"
                                  ? "default"
                                  : "secondary"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.payment}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Ver detalhes</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <ArrowUpDown className="h-4 w-4" />
                            <span className="sr-only">Atualizar status</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mercadolivre">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos do Mercado Livre</CardTitle>
              <CardDescription>Visualize e gerencie pedidos do Mercado Livre.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID do Pedido</TableHead>
                    <TableHead>ID Mercado Livre</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allOrders
                    .filter((order) => order.marketplace === "Mercado Livre")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.marketplaceId}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Entregue"
                                ? "success"
                                : order.status === "Cancelado"
                                  ? "destructive"
                                  : order.status === "Enviado"
                                    ? "default"
                                    : "secondary"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.payment}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver detalhes</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <ArrowUpDown className="h-4 w-4" />
                              <span className="sr-only">Atualizar status</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amazon">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos da Amazon</CardTitle>
              <CardDescription>Visualize e gerencie pedidos da Amazon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID do Pedido</TableHead>
                    <TableHead>ID Amazon</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allOrders
                    .filter((order) => order.marketplace === "Amazon")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.marketplaceId}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Entregue"
                                ? "success"
                                : order.status === "Cancelado"
                                  ? "destructive"
                                  : order.status === "Enviado"
                                    ? "default"
                                    : "secondary"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.payment}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver detalhes</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <ArrowUpDown className="h-4 w-4" />
                              <span className="sr-only">Atualizar status</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shopee">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos da Shopee</CardTitle>
              <CardDescription>Visualize e gerencie pedidos da Shopee.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID do Pedido</TableHead>
                    <TableHead>ID Shopee</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allOrders
                    .filter((order) => order.marketplace === "Shopee")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.marketplaceId}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Entregue"
                                ? "success"
                                : order.status === "Cancelado"
                                  ? "destructive"
                                  : order.status === "Enviado"
                                    ? "default"
                                    : "secondary"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.payment}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver detalhes</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <ArrowUpDown className="h-4 w-4" />
                              <span className="sr-only">Atualizar status</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+12 pedidos em relação à semana passada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.450,00</div>
            <p className="text-xs text-muted-foreground">+15% em relação à semana passada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Aguardando processamento</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Dados de exemplo
const allOrders = [
  {
    id: "PED-10045",
    marketplaceId: "ML-123456789",
    marketplace: "Mercado Livre",
    marketplaceIcon: "ML",
    customer: "Marcos Silva",
    date: "17/03/2023",
    total: 249.99,
    status: "Entregue",
    payment: "Cartão de Crédito",
  },
  {
    id: "PED-10046",
    marketplaceId: "ML-123456790",
    marketplace: "Mercado Livre",
    marketplaceIcon: "ML",
    customer: "Ana Oliveira",
    date: "17/03/2023",
    total: 89.99,
    status: "Em Processamento",
    payment: "Boleto",
  },
  {
    id: "PED-10047",
    marketplaceId: "AMZ-987654321",
    marketplace: "Amazon",
    marketplaceIcon: "AMZ",
    customer: "Carlos Mendes",
    date: "16/03/2023",
    total: 349.99,
    status: "Enviado",
    payment: "Cartão de Crédito",
  },
  {
    id: "PED-10048",
    marketplaceId: "AMZ-987654322",
    marketplace: "Amazon",
    marketplaceIcon: "AMZ",
    customer: "Juliana Costa",
    date: "16/03/2023",
    total: 249.99,
    status: "Pendente",
    payment: "Cartão de Crédito",
  },
  {
    id: "PED-10049",
    marketplaceId: "SHP-567891234",
    marketplace: "Shopee",
    marketplaceIcon: "SHP",
    customer: "Roberto Almeida",
    date: "15/03/2023",
    total: 349.99,
    status: "Cancelado",
    payment: "Cartão de Crédito",
  },
  {
    id: "PED-10050",
    marketplaceId: "SHP-567891235",
    marketplace: "Shopee",
    marketplaceIcon: "SHP",
    customer: "Fernanda Santos",
    date: "15/03/2023",
    total: 179.99,
    status: "Em Processamento",
    payment: "Pix",
  },
  {
    id: "PED-10051",
    marketplaceId: "ML-123456791",
    marketplace: "Mercado Livre",
    marketplaceIcon: "ML",
    customer: "Paulo Rodrigues",
    date: "14/03/2023",
    total: 129.99,
    status: "Enviado",
    payment: "Cartão de Crédito",
  },
  {
    id: "PED-10052",
    marketplaceId: "AMZ-987654323",
    marketplace: "Amazon",
    marketplaceIcon: "AMZ",
    customer: "Mariana Lima",
    date: "14/03/2023",
    total: 199.99,
    status: "Entregue",
    payment: "Cartão de Crédito",
  },
]


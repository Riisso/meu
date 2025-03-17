import type { Metadata } from "next"
import { Calendar, Download, Filter, Search, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Gerenciamento de Entregas | Painel Administrativo",
  description: "Acompanhe e gerencie as entregas dos pedidos.",
}

export default function DeliveriesManagementPage() {
  // Em um ambiente real, buscaríamos os dados das entregas
  // Para este exemplo, usaremos dados estáticos
  const deliveries = [
    {
      id: "10045",
      customer: "Marcos Silva",
      address: "Rua das Flores, 123, Centro, Rio de Janeiro - RJ",
      date: "25/06/2023",
      trackingCode: "BR1234567890",
      carrier: "SEDEX",
      status: "Entregue",
      estimatedDelivery: "27/06/2023",
    },
    {
      id: "10046",
      customer: "Ana Oliveira",
      address: "Av. Paulista, 1000, Bela Vista, São Paulo - SP",
      date: "26/06/2023",
      trackingCode: "BR0987654321",
      carrier: "PAC",
      status: "Em Trânsito",
      estimatedDelivery: "30/06/2023",
    },
    {
      id: "10047",
      customer: "Carlos Mendes",
      address: "Rua dos Pinheiros, 500, Pinheiros, São Paulo - SP",
      date: "27/06/2023",
      trackingCode: "BR5678901234",
      carrier: "SEDEX",
      status: "Em Trânsito",
      estimatedDelivery: "29/06/2023",
    },
    {
      id: "10048",
      customer: "Juliana Costa",
      address: "Av. Atlântica, 2000, Copacabana, Rio de Janeiro - RJ",
      date: "28/06/2023",
      trackingCode: "BR3456789012",
      carrier: "Transportadora",
      status: "Preparando",
      estimatedDelivery: "02/07/2023",
    },
    {
      id: "10049",
      customer: "Roberto Almeida",
      address: "Rua Augusta, 300, Consolação, São Paulo - SP",
      date: "29/06/2023",
      trackingCode: "Pendente",
      carrier: "PAC",
      status: "Aguardando Envio",
      estimatedDelivery: "05/07/2023",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Entregas</h2>
          <p className="text-muted-foreground">Acompanhe e gerencie as entregas dos pedidos.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <Truck className="mr-2 h-4 w-4" />
            Registrar Envio
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Aguardando Envio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Pedidos prontos para envio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Em Trânsito</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">Pedidos a caminho do cliente</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Entregues Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Pedidos entregues no dia</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio de Entrega</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 dias</div>
            <p className="text-xs text-muted-foreground">Média dos últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por pedido, cliente ou código de rastreio..." className="pl-8" />
          </div>
          <Button variant="outline">Buscar</Button>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="waiting">Aguardando Envio</SelectItem>
              <SelectItem value="preparing">Preparando</SelectItem>
              <SelectItem value="transit">Em Trânsito</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Transportadora" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="sedex">SEDEX</SelectItem>
              <SelectItem value="pac">PAC</SelectItem>
              <SelectItem value="transport">Transportadora</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Entregas</CardTitle>
          <CardDescription>Gerencie todas as entregas da sua loja.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data do Pedido</TableHead>
                <TableHead>Transportadora</TableHead>
                <TableHead>Código de Rastreio</TableHead>
                <TableHead>Previsão de Entrega</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell className="font-medium">#{delivery.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{delivery.customer}</span>
                      <span className="text-xs text-muted-foreground truncate max-w-[200px]">{delivery.address}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{delivery.date}</span>
                    </div>
                  </TableCell>
                  <TableCell>{delivery.carrier}</TableCell>
                  <TableCell>
                    {delivery.trackingCode !== "Pendente" ? (
                      <a
                        href={`https://www.correios.com.br/rastreamento/${delivery.trackingCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {delivery.trackingCode}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">Pendente</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{delivery.estimatedDelivery}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        delivery.status === "Entregue"
                          ? "success"
                          : delivery.status === "Em Trânsito"
                            ? "default"
                            : delivery.status === "Preparando"
                              ? "warning"
                              : "outline"
                      }
                    >
                      {delivery.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Truck className="h-4 w-4 mr-1" />
                        Atualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Detalhes
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


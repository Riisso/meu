import type { Metadata } from "next"
import { Eye, FileDown, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Gerenciamento de Pedidos | Películas Premium",
  description: "Acompanhe e gerencie todos os pedidos da loja.",
}

export default function OrdersManagement() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Pedidos</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Exportar Pedidos
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex flex-1 items-center space-x-2">
            <Input placeholder="Buscar por ID, cliente ou status..." className="w-[300px]" />
            <Button variant="outline">Buscar</Button>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
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
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais Recentes</SelectItem>
                <SelectItem value="oldest">Mais Antigos</SelectItem>
                <SelectItem value="highest">Maior Valor</SelectItem>
                <SelectItem value="lowest">Menor Valor</SelectItem>
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
            <CardTitle>Pedidos</CardTitle>
            <CardDescription>Gerencie todos os pedidos da sua loja.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID do Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pagamento</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">#{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Entregue"
                            ? "default"
                            : order.status === "Cancelado"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.payment}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Ver detalhes</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Sample data
const orders = [
  {
    id: "10045",
    customer: "Marcos Silva",
    date: "23/06/2023",
    total: 249.99,
    status: "Entregue",
    payment: "Cartão de Crédito",
  },
  {
    id: "10046",
    customer: "Ana Oliveira",
    date: "24/06/2023",
    total: 89.99,
    status: "Em Processamento",
    payment: "Boleto",
  },
  {
    id: "10047",
    customer: "Carlos Mendes",
    date: "25/06/2023",
    total: 349.99,
    status: "Enviado",
    payment: "Cartão de Crédito",
  },
  {
    id: "10048",
    customer: "Juliana Costa",
    date: "26/06/2023",
    total: 249.99,
    status: "Pendente",
    payment: "Pix",
  },
  {
    id: "10049",
    customer: "Roberto Almeida",
    date: "27/06/2023",
    total: 349.99,
    status: "Cancelado",
    payment: "Cartão de Crédito",
  },
  {
    id: "10050",
    customer: "Fernanda Santos",
    date: "28/06/2023",
    total: 179.99,
    status: "Entregue",
    payment: "Pix",
  },
]


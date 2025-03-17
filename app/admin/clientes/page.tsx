import type { Metadata } from "next"
import { Eye, FileDown, Filter, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Gerenciamento de Clientes | Películas Premium",
  description: "Visualize e gerencie todos os clientes da loja.",
}

export default function CustomersManagement() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Clientes</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Exportar Clientes
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input placeholder="Buscar clientes..." className="w-[300px]" />
            <Button variant="outline">Buscar</Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filtrar</span>
            </Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Clientes</CardTitle>
            <CardDescription>Gerencie todos os clientes da sua loja.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Total de Pedidos</TableHead>
                  <TableHead>Valor Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.totalOrders}</TableCell>
                    <TableCell>R$ {customer.totalSpent.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={customer.status === "Ativo" ? "default" : "secondary"}>{customer.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Ver detalhes</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Enviar email</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Phone className="h-4 w-4" />
                          <span className="sr-only">Ligar</span>
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
    </div>
  )
}

// Sample data
const customers = [
  {
    id: "1",
    name: "Marcos Silva",
    email: "marcos.silva@email.com",
    phone: "(11) 98765-4321",
    totalOrders: 5,
    totalSpent: 1249.95,
    status: "Ativo",
  },
  {
    id: "2",
    name: "Ana Oliveira",
    email: "ana.oliveira@email.com",
    phone: "(11) 91234-5678",
    totalOrders: 3,
    totalSpent: 269.97,
    status: "Ativo",
  },
  {
    id: "3",
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    phone: "(21) 99876-5432",
    totalOrders: 2,
    totalSpent: 699.98,
    status: "Ativo",
  },
  {
    id: "4",
    name: "Juliana Costa",
    email: "juliana.costa@email.com",
    phone: "(21) 98765-1234",
    totalOrders: 1,
    totalSpent: 249.99,
    status: "Ativo",
  },
  {
    id: "5",
    name: "Roberto Almeida",
    email: "roberto.almeida@email.com",
    phone: "(31) 99999-8888",
    totalOrders: 4,
    totalSpent: 1399.96,
    status: "Ativo",
  },
  {
    id: "6",
    name: "Fernanda Santos",
    email: "fernanda.santos@email.com",
    phone: "(31) 98888-7777",
    totalOrders: 2,
    totalSpent: 359.98,
    status: "Inativo",
  },
]


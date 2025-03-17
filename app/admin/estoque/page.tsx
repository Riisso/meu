import type { Metadata } from "next"
import { ArrowUpDown, Download, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Gerenciamento de Estoque | Painel Administrativo",
  description: "Controle e gerencie o estoque de produtos da loja.",
}

export default function InventoryManagementPage() {
  // Em um ambiente real, buscaríamos os dados do estoque
  // Para este exemplo, usaremos dados estáticos
  const inventoryItems = [
    {
      id: "1",
      name: "Película Fumê Profissional",
      sku: "PEL-FUM-001",
      category: "Veicular",
      quantity: 120,
      lowStock: 20,
      status: "Em Estoque",
      lastUpdated: "25/06/2023",
    },
    {
      id: "2",
      name: "Película Residencial de Controle Solar",
      sku: "PEL-RES-002",
      category: "Residencial",
      quantity: 85,
      lowStock: 15,
      status: "Em Estoque",
      lastUpdated: "24/06/2023",
    },
    {
      id: "3",
      name: "Película Anti-Risco Premium",
      sku: "PEL-ANT-003",
      category: "Veicular",
      quantity: 42,
      lowStock: 10,
      status: "Em Estoque",
      lastUpdated: "23/06/2023",
    },
    {
      id: "4",
      name: "Película Espelhada Prata",
      sku: "PEL-ESP-004",
      category: "Residencial",
      quantity: 67,
      lowStock: 15,
      status: "Em Estoque",
      lastUpdated: "22/06/2023",
    },
    {
      id: "5",
      name: "Película de Segurança Residencial",
      sku: "PEL-SEG-005",
      category: "Residencial",
      quantity: 30,
      lowStock: 10,
      status: "Estoque Baixo",
      lastUpdated: "21/06/2023",
    },
    {
      id: "6",
      name: "Película Fumê Escura",
      sku: "PEL-FUM-006",
      category: "Veicular",
      quantity: 0,
      lowStock: 10,
      status: "Esgotado",
      lastUpdated: "20/06/2023",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Estoque</h2>
          <p className="text-muted-foreground">Controle e gerencie o estoque de produtos da loja.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Produto
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">256</div>
            <p className="text-xs text-muted-foreground">+12 produtos adicionados este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos com Estoque Baixo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Produtos abaixo do limite mínimo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Esgotados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Produtos sem estoque disponível</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar produtos..." className="pl-8" />
          </div>
          <Button variant="outline">Buscar</Button>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              <SelectItem value="veicular">Veicular</SelectItem>
              <SelectItem value="residencial">Residencial</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
              <SelectItem value="acessorios">Acessórios</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="in-stock">Em Estoque</SelectItem>
              <SelectItem value="low-stock">Estoque Baixo</SelectItem>
              <SelectItem value="out-of-stock">Esgotado</SelectItem>
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
          <CardTitle>Estoque de Produtos</CardTitle>
          <CardDescription>Gerencie o estoque de produtos da sua loja.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-center">Quantidade</TableHead>
                <TableHead className="text-center">Estoque Mínimo</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-center">{item.lowStock}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        item.status === "Em Estoque"
                          ? "success"
                          : item.status === "Estoque Baixo"
                            ? "warning"
                            : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <ArrowUpDown className="h-4 w-4 mr-1" />
                        Ajustar
                      </Button>
                      <Button variant="outline" size="sm">
                        Editar
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


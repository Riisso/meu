import type { Metadata } from "next"
import { Calendar, Plus, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "Gerenciamento de Promoções | Painel Administrativo",
  description: "Crie e gerencie promoções e descontos para os produtos da loja.",
}

export default function PromotionsManagementPage() {
  // Em um ambiente real, buscaríamos os dados das promoções
  // Para este exemplo, usaremos dados estáticos
  const promotions = [
    {
      id: "1",
      name: "Promoção de Verão",
      type: "Desconto Percentual",
      discount: "20%",
      startDate: "01/12/2023",
      endDate: "31/01/2024",
      status: "Ativa",
      productsCount: 45,
      description: "Desconto de verão em películas veiculares e residenciais",
    },
    {
      id: "2",
      name: "Frete Grátis",
      type: "Frete Grátis",
      discount: "100%",
      startDate: "15/11/2023",
      endDate: "15/12/2023",
      status: "Ativa",
      productsCount: 120,
      description: "Frete grátis para compras acima de R$ 300,00",
    },
    {
      id: "3",
      name: "Black Friday",
      type: "Desconto Percentual",
      discount: "30%",
      startDate: "24/11/2023",
      endDate: "27/11/2023",
      status: "Encerrada",
      productsCount: 85,
      description: "Descontos especiais de Black Friday",
    },
    {
      id: "4",
      name: "Compre 2, Leve 3",
      type: "Compre X, Leve Y",
      discount: "1 Grátis",
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      status: "Agendada",
      productsCount: 32,
      description: "Compre 2 películas e leve 3",
    },
    {
      id: "5",
      name: "Desconto para Primeira Compra",
      type: "Desconto Valor Fixo",
      discount: "R$ 50,00",
      startDate: "01/01/2023",
      endDate: "31/12/2023",
      status: "Ativa",
      productsCount: 256,
      description: "Desconto para novos clientes",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Promoções</h2>
          <p className="text-muted-foreground">Crie e gerencie promoções e descontos para os produtos da loja.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Promoção
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Promoções Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Promoções em andamento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Promoções Agendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Promoções que iniciarão em breve</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos em Promoção</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">197</div>
            <p className="text-xs text-muted-foreground">Produtos com descontos ativos</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar promoções..." className="pl-8" />
        </div>
        <Button variant="outline">Buscar</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Promoções</CardTitle>
          <CardDescription>Gerencie todas as promoções da sua loja.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Desconto</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Produtos</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ativo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promotion) => (
                <TableRow key={promotion.id}>
                  <TableCell className="font-medium">{promotion.name}</TableCell>
                  <TableCell>{promotion.type}</TableCell>
                  <TableCell>{promotion.discount}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">
                        {promotion.startDate} - {promotion.endDate}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{promotion.productsCount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        promotion.status === "Ativa"
                          ? "success"
                          : promotion.status === "Agendada"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {promotion.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Switch checked={promotion.status === "Ativa"} disabled={promotion.status === "Encerrada"} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Tag className="h-4 w-4 mr-1" />
                        Produtos
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


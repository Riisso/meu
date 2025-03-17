import type { Metadata } from "next"
import { Copy, Gift, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "Gerenciamento de Cupons | Painel Administrativo",
  description: "Crie e gerencie cupons de desconto para sua loja.",
}

export default function CouponsManagementPage() {
  // Em um ambiente real, buscaríamos os dados dos cupons
  // Para este exemplo, usaremos dados estáticos
  const coupons = [
    {
      id: "1",
      code: "BEMVINDO20",
      type: "Percentual",
      value: "20%",
      minPurchase: "R$ 100,00",
      usageLimit: 1,
      usageCount: 45,
      startDate: "01/01/2023",
      endDate: "31/12/2023",
      status: "Ativo",
    },
    {
      id: "2",
      code: "FRETEGRATIS",
      type: "Frete Grátis",
      value: "100%",
      minPurchase: "R$ 300,00",
      usageLimit: "Ilimitado",
      usageCount: 87,
      startDate: "01/11/2023",
      endDate: "31/12/2023",
      status: "Ativo",
    },
    {
      id: "3",
      code: "BLACKFRIDAY30",
      type: "Percentual",
      value: "30%",
      minPurchase: "R$ 200,00",
      usageLimit: "Ilimitado",
      usageCount: 156,
      startDate: "24/11/2023",
      endDate: "27/11/2023",
      status: "Expirado",
    },
    {
      id: "4",
      code: "VERAO50",
      type: "Valor Fixo",
      value: "R$ 50,00",
      minPurchase: "R$ 250,00",
      usageLimit: 100,
      usageCount: 0,
      startDate: "01/12/2023",
      endDate: "31/01/2024",
      status: "Ativo",
    },
    {
      id: "5",
      code: "ANIVERSARIO25",
      type: "Percentual",
      value: "25%",
      minPurchase: "R$ 150,00",
      usageLimit: 200,
      usageCount: 0,
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      status: "Agendado",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Cupons</h2>
          <p className="text-muted-foreground">Crie e gerencie cupons de desconto para sua loja.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Cupom
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cupons Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Cupons disponíveis para uso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Usos Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">288</div>
            <p className="text-xs text-muted-foreground">Cupons utilizados pelos clientes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia Gerada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.450,00</div>
            <p className="text-xs text-muted-foreground">Valor total de descontos aplicados</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar cupons..." className="pl-8" />
        </div>
        <Button variant="outline">Buscar</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cupons</CardTitle>
          <CardDescription>Gerencie todos os cupons de desconto da sua loja.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Compra Mínima</TableHead>
                <TableHead>Limite de Uso</TableHead>
                <TableHead>Usos</TableHead>
                <TableHead>Validade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ativo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-1">
                      <span>{coupon.code}</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Copy className="h-3 w-3" />
                        <span className="sr-only">Copiar código</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{coupon.type}</TableCell>
                  <TableCell>{coupon.value}</TableCell>
                  <TableCell>{coupon.minPurchase}</TableCell>
                  <TableCell>{coupon.usageLimit}</TableCell>
                  <TableCell>{coupon.usageCount}</TableCell>
                  <TableCell className="text-sm">
                    {coupon.startDate} - {coupon.endDate}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        coupon.status === "Ativo" ? "success" : coupon.status === "Agendado" ? "outline" : "secondary"
                      }
                    >
                      {coupon.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Switch checked={coupon.status === "Ativo"} disabled={coupon.status === "Expirado"} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Gift className="h-4 w-4 mr-1" />
                        Enviar
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


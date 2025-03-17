import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpDown, Download, Filter, RefreshCw, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Estoque em Marketplaces | Painel Administrativo",
  description: "Gerencie o estoque de produtos em todos os marketplaces integrados.",
}

export default function MarketplaceInventoryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Estoque em Marketplaces</h2>
          <p className="text-muted-foreground">Gerencie o estoque de produtos em todos os marketplaces integrados.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Sincronizar Estoque
          </Button>
        </div>
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
              <SelectItem value="in-stock">Em Estoque</SelectItem>
              <SelectItem value="low-stock">Estoque Baixo</SelectItem>
              <SelectItem value="out-of-stock">Esgotado</SelectItem>
              <SelectItem value="not-synced">Não Sincronizado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Sincronizados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145/156</div>
            <p className="text-xs text-muted-foreground">93% dos produtos sincronizados</p>
            <Progress value={93} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos com Estoque Baixo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Produtos abaixo do limite mínimo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Esgotados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Produtos sem estoque disponível</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Não Sincronizados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11</div>
            <p className="text-xs text-muted-foreground">Produtos pendentes de sincronização</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos os Produtos</TabsTrigger>
          <TabsTrigger value="mercadolivre">Mercado Livre</TabsTrigger>
          <TabsTrigger value="amazon">Amazon</TabsTrigger>
          <TabsTrigger value="shopee">Shopee</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Estoque em Todos os Marketplaces</CardTitle>
              <CardDescription>Visualize e gerencie o estoque em todos os marketplaces.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Estoque Loja</TableHead>
                    <TableHead>Mercado Livre</TableHead>
                    <TableHead>Amazon</TableHead>
                    <TableHead>Shopee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                            <Image
                              src={item.image || "/placeholder.svg?height=40&width=40"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.category}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell className="font-medium">{item.stock}</TableCell>
                      <TableCell>
                        {item.marketplaces.mercadolivre.synced ? (
                          <span>{item.marketplaces.mercadolivre.stock}</span>
                        ) : (
                          <Badge variant="outline">Não Sincronizado</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {item.marketplaces.amazon.synced ? (
                          <span>{item.marketplaces.amazon.stock}</span>
                        ) : (
                          <Badge variant="outline">Não Sincronizado</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {item.marketplaces.shopee.synced ? (
                          <span>{item.marketplaces.shopee.stock}</span>
                        ) : (
                          <Badge variant="outline">Não Sincronizado</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={item.stock > 20 ? "success" : item.stock > 0 ? "warning" : "destructive"}>
                          {item.stock > 20 ? "Em Estoque" : item.stock > 0 ? "Estoque Baixo" : "Esgotado"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <ArrowUpDown className="h-4 w-4 mr-1" />
                            Ajustar
                          </Button>
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-4 w-4 mr-1" />
                            Sincronizar
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
              <CardTitle>Estoque no Mercado Livre</CardTitle>
              <CardDescription>Visualize e gerencie o estoque no Mercado Livre.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>ID Mercado Livre</TableHead>
                    <TableHead>Estoque Loja</TableHead>
                    <TableHead>Estoque Mercado Livre</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Atualização</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems
                    .filter((item) => item.marketplaces.mercadolivre.synced)
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                              <Image
                                src={item.image || "/placeholder.svg?height=40&width=40"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.category}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell>{item.marketplaces.mercadolivre.id}</TableCell>
                        <TableCell className="font-medium">{item.stock}</TableCell>
                        <TableCell>{item.marketplaces.mercadolivre.stock}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.marketplaces.mercadolivre.stock > 20
                                ? "success"
                                : item.marketplaces.mercadolivre.stock > 0
                                  ? "warning"
                                  : "destructive"
                            }
                          >
                            {item.marketplaces.mercadolivre.stock > 20
                              ? "Em Estoque"
                              : item.marketplaces.mercadolivre.stock > 0
                                ? "Estoque Baixo"
                                : "Esgotado"}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.marketplaces.mercadolivre.lastUpdate}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <ArrowUpDown className="h-4 w-4 mr-1" />
                              Ajustar
                            </Button>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4 mr-1" />
                              Sincronizar
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
              <CardTitle>Estoque na Amazon</CardTitle>
              <CardDescription>Visualize e gerencie o estoque na Amazon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>ID Amazon</TableHead>
                    <TableHead>Estoque Loja</TableHead>
                    <TableHead>Estoque Amazon</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Atualização</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems
                    .filter((item) => item.marketplaces.amazon.synced)
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                              <Image
                                src={item.image || "/placeholder.svg?height=40&width=40"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.category}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell>{item.marketplaces.amazon.id}</TableCell>
                        <TableCell className="font-medium">{item.stock}</TableCell>
                        <TableCell>{item.marketplaces.amazon.stock}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.marketplaces.amazon.stock > 20
                                ? "success"
                                : item.marketplaces.amazon.stock > 0
                                  ? "warning"
                                  : "destructive"
                            }
                          >
                            {item.marketplaces.amazon.stock > 20
                              ? "Em Estoque"
                              : item.marketplaces.amazon.stock > 0
                                ? "Estoque Baixo"
                                : "Esgotado"}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.marketplaces.amazon.lastUpdate}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <ArrowUpDown className="h-4 w-4 mr-1" />
                              Ajustar
                            </Button>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4 mr-1" />
                              Sincronizar
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
              <CardTitle>Estoque na Shopee</CardTitle>
              <CardDescription>Visualize e gerencie o estoque na Shopee.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>ID Shopee</TableHead>
                    <TableHead>Estoque Loja</TableHead>
                    <TableHead>Estoque Shopee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Atualização</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems
                    .filter((item) => item.marketplaces.shopee.synced)
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                              <Image
                                src={item.image || "/placeholder.svg?height=40&width=40"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.category}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell>{item.marketplaces.shopee.id}</TableCell>
                        <TableCell className="font-medium">{item.stock}</TableCell>
                        <TableCell>{item.marketplaces.shopee.stock}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.marketplaces.shopee.stock > 20
                                ? "success"
                                : item.marketplaces.shopee.stock > 0
                                  ? "warning"
                                  : "destructive"
                            }
                          >
                            {item.marketplaces.shopee.stock > 20
                              ? "Em Estoque"
                              : item.marketplaces.shopee.stock > 0
                                ? "Estoque Baixo"
                                : "Esgotado"}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.marketplaces.shopee.lastUpdate}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <ArrowUpDown className="h-4 w-4 mr-1" />
                              Ajustar
                            </Button>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4 mr-1" />
                              Sincronizar
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
    </div>
  )
}

// Dados de exemplo
const inventoryItems = [
  {
    id: "1",
    name: "Película Fumê Profissional",
    sku: "PEL-FUM-001",
    category: "Veicular",
    stock: 120,
    image: "/placeholder.svg?height=40&width=40",
    marketplaces: {
      mercadolivre: {
        synced: true,
        id: "MLB1234567890",
        stock: 120,
        lastUpdate: "17/03/2023 14:32",
      },
      amazon: {
        synced: true,
        id: "AMZB0987654321",
        stock: 118,
        lastUpdate: "17/03/2023 10:15",
      },
      shopee: {
        synced: true,
        id: "SHP5678912345",
        stock: 115,
        lastUpdate: "15/03/2023 18:45",
      },
    },
  },
  {
    id: "2",
    name: "Película Residencial de Controle Solar",
    sku: "PEL-RES-002",
    category: "Residencial",
    stock: 85,
    image: "/placeholder.svg?height=40&width=40",
    marketplaces: {
      mercadolivre: {
        synced: true,
        id: "MLB1234567891",
        stock: 85,
        lastUpdate: "17/03/2023 14:32",
      },
      amazon: {
        synced: true,
        id: "AMZB0987654322",
        stock: 83,
        lastUpdate: "17/03/2023 10:15",
      },
      shopee: {
        synced: true,
        id: "SHP5678912346",
        stock: 80,
        lastUpdate: "15/03/2023 18:45",
      },
    },
  },
  {
    id: "3",
    name: "Película Anti-Risco Premium",
    sku: "PEL-ANT-003",
    category: "Veicular",
    stock: 42,
    image: "/placeholder.svg?height=40&width=40",
    marketplaces: {
      mercadolivre: {
        synced: true,
        id: "MLB1234567892",
        stock: 42,
        lastUpdate: "17/03/2023 14:32",
      },
      amazon: {
        synced: true,
        id: "AMZB0987654323",
        stock: 40,
        lastUpdate: "17/03/2023 10:15",
      },
      shopee: {
        synced: true,
        id: "SHP5678912347",
        stock: 38,
        lastUpdate: "15/03/2023 18:45",
      },
    },
  },
  {
    id: "4",
    name: "Película Espelhada Prata",
    sku: "PEL-ESP-004",
    category: "Residencial",
    stock: 67,
    image: "/placeholder.svg?height=40&width=40",
    marketplaces: {
      mercadolivre: {
        synced: true,
        id: "MLB1234567893",
        stock: 67,
        lastUpdate: "17/03/2023 14:32",
      },
      amazon: {
        synced: false,
        id: "",
        stock: 0,
        lastUpdate: "",
      },
      shopee: {
        synced: true,
        id: "SHP5678912348",
        stock: 65,
        lastUpdate: "15/03/2023 18:45",
      },
    },
  },
  {
    id: "5",
    name: "Película de Segurança Residencial",
    sku: "PEL-SEG-005",
    category: "Residencial",
    stock: 15,
    image: "/placeholder.svg?height=40&width=40",
    marketplaces: {
      mercadolivre: {
        synced: true,
        id: "MLB1234567894",
        stock: 15,
        lastUpdate: "17/03/2023 14:32",
      },
      amazon: {
        synced: true,
        id: "AMZB0987654324",
        stock: 15,
        lastUpdate: "17/03/2023 10:15",
      },
      shopee: {
        synced: false,
        id: "",
        stock: 0,
        lastUpdate: "",
      },
    },
  },
  {
    id: "6",
    name: "Película Fumê Escura",
    sku: "PEL-FUM-006",
    category: "Veicular",
    stock: 0,
    image: "/placeholder.svg?height=40&width=40",
    marketplaces: {
      mercadolivre: {
        synced: true,
        id: "MLB1234567895",
        stock: 0,
        lastUpdate: "17/03/2023 14:32",
      },
      amazon: {
        synced: true,
        id: "AMZB0987654325",
        stock: 0,
        lastUpdate: "17/03/2023 10:15",
      },
      shopee: {
        synced: true,
        id: "SHP5678912349",
        stock: 0,
        lastUpdate: "15/03/2023 18:45",
      },
    },
  },
]


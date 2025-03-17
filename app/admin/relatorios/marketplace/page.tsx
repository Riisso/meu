import type { Metadata } from "next"
import { Calendar, Download, LineChart, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Relatórios de Marketplaces | Painel Administrativo",
  description: "Visualize relatórios e análises de vendas em marketplaces.",
}

export default function MarketplaceReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Relatórios de Marketplaces</h2>
          <p className="text-muted-foreground">
            Visualize relatórios e análises de vendas em todos os marketplaces integrados.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Select defaultValue="30">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
                <SelectItem value="365">Último ano</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Selecionar Datas
            </Button>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-xs text-muted-foreground">+20.1% em relação ao período anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 em relação ao período anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 78,94</div>
            <p className="text-xs text-muted-foreground">-2.3% em relação ao período anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">+0.5% em relação ao período anterior</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="comparison">Comparativo</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Marketplace</CardTitle>
                <CardDescription>Distribuição de vendas por marketplace</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <PieChart className="h-16 w-16" />
                  <p>Gráfico de Vendas por Marketplace</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Evolução de Vendas</CardTitle>
                <CardDescription>Evolução de vendas nos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <LineChart className="h-16 w-16" />
                  <p>Gráfico de Evolução de Vendas</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Marketplace</CardTitle>
              <CardDescription>Comparativo de desempenho entre marketplaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <h4 className="font-medium">Mercado Livre</h4>
                    </div>
                    <div className="font-medium">R$ 22.450,50</div>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[50%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>49.6% das vendas</span>
                    <span>245 pedidos</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                      <h4 className="font-medium">Amazon</h4>
                    </div>
                    <div className="font-medium">R$ 15.780,25</div>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[35%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>34.9% das vendas</span>
                    <span>198 pedidos</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <h4 className="font-medium">Shopee</h4>
                    </div>
                    <div className="font-medium">R$ 7.001,14</div>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[15%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>15.5% das vendas</span>
                    <span>130 pedidos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Período</CardTitle>
                <CardDescription>Análise de vendas nos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <LineChart className="h-16 w-16" />
                  <p>Gráfico de Vendas por Período</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Categoria</CardTitle>
                <CardDescription>Distribuição de vendas por categoria de produto</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <PieChart className="h-16 w-16" />
                  <p>Gráfico de Vendas por Categoria</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vendas por Método de Pagamento</CardTitle>
              <CardDescription>Análise de vendas por método de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <PieChart className="h-16 w-16" />
                <p>Gráfico de Vendas por Método de Pagamento</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos Mais Vendidos por Marketplace</CardTitle>
              <CardDescription>Top produtos em cada marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mercadolivre" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="mercadolivre">Mercado Livre</TabsTrigger>
                  <TabsTrigger value="amazon">Amazon</TabsTrigger>
                  <TabsTrigger value="shopee">Shopee</TabsTrigger>
                </TabsList>

                <TabsContent value="mercadolivre">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Fumê Profissional</p>
                        <p className="text-sm">124 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[80%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Residencial de Controle Solar</p>
                        <p className="text-sm">98 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[65%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Anti-Risco Premium</p>
                        <p className="text-sm">87 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[55%]" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="amazon">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Anti-Risco Premium</p>
                        <p className="text-sm">105 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full w-[85%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Fumê Profissional</p>
                        <p className="text-sm">92 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full w-[70%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Espelhada Prata</p>
                        <p className="text-sm">65 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full w-[50%]" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="shopee">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Fumê Profissional</p>
                        <p className="text-sm">78 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[75%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película Residencial de Controle Solar</p>
                        <p className="text-sm">52 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[50%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Película de Segurança Residencial</p>
                        <p className="text-sm">45 vendas</p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[40%]" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Desempenho de Produtos por Marketplace</CardTitle>
              <CardDescription>Comparativo de desempenho de produtos entre marketplaces</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <LineChart className="h-16 w-16" />
                <p>Gráfico de Desempenho por Marketplace</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comparativo de Marketplaces</CardTitle>
              <CardDescription>Análise comparativa entre marketplaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1"></div>
                  <div className="text-center font-medium">Mercado Livre</div>
                  <div className="text-center font-medium">Amazon</div>
                  <div className="text-center font-medium">Shopee</div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium">Receita Total</div>
                    <div className="text-center">R$ 22.450,50</div>
                    <div className="text-center">R$ 15.780,25</div>
                    <div className="text-center">R$ 7.001,14</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium">Pedidos</div>
                    <div className="text-center">245</div>
                    <div className="text-center">198</div>
                    <div className="text-center">130</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium">Ticket Médio</div>
                    <div className="text-center">R$ 91,63</div>
                    <div className="text-center">R$ 79,70</div>
                    <div className="text-center">R$ 53,85</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium">Taxa de Conversão</div>
                    <div className="text-center">3.8%</div>
                    <div className="text-center">3.2%</div>
                    <div className="text-center">2.5%</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium">Taxa de Cancelamento</div>
                    <div className="text-center">1.2%</div>
                    <div className="text-center">0.8%</div>
                    <div className="text-center">2.1%</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium">Tempo Médio de Entrega</div>
                    <div className="text-center">3.5 dias</div>
                    <div className="text-center">2.8 dias</div>
                    <div className="text-center">4.2 dias</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Evolução Comparativa</CardTitle>
              <CardDescription>Evolução de vendas por marketplace ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <LineChart className="h-16 w-16" />
                <p>Gráfico de Evolução Comparativa</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


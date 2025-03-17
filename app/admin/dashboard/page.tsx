import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  ExternalLink,
  Eye,
  Layers,
  LineChart,
  Package,
  Percent,
  PieChart,
  RefreshCw,
  ShoppingBag,
  ShoppingCart,
  Star,
  Users,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Dashboard Administrativo | Películas Premium",
  description: "Painel de controle administrativo com métricas e análises detalhadas.",
}

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
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
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Alertas e Notificações */}
      <div className="space-y-2">
        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>
            5 produtos estão com estoque abaixo do limite mínimo.{" "}
            <Link href="/admin/estoque" className="font-medium underline underline-offset-4">
              Verificar agora
            </Link>
            .
          </AlertDescription>
        </Alert>
      </div>

      {/* Métricas Principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+20.1% em relação ao mês passado</span>
            </div>
            <Progress value={75} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+12.5% em relação ao mês passado</span>
            </div>
            <Progress value={65} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.350</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+8.2% em relação ao mês passado</span>
            </div>
            <Progress value={55} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 78,94</div>
            <div className="flex items-center pt-1 text-xs text-red-500">
              <ArrowDown className="mr-1 h-3 w-3" />
              <span>-2.3% em relação ao mês passado</span>
            </div>
            <Progress value={45} className="h-1 mt-3" />
          </CardContent>
        </Card>
      </div>

      {/* Métricas Secundárias */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+0.5% em relação ao mês passado</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Pendentes</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span>Aguardando processamento</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+12 novos produtos este mês</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliações</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span>Baseado em 324 avaliações</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos e Análises */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
          <TabsTrigger value="marketplaces">Marketplaces</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Gráfico de Vendas */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Visão Geral de Vendas</CardTitle>
                <CardDescription>Vendas diárias nos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Vendas</span>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">Vendas (R$)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-muted-foreground">Pedidos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-muted-foreground">Conversões</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendas por Categoria */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Vendas por Categoria</CardTitle>
                <CardDescription>Distribuição de vendas por categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Categorias</span>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm text-muted-foreground">Películas Veiculares (58%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-muted-foreground">Películas Residenciais (32%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-muted-foreground">Películas Comerciais (10%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Produtos Mais Vendidos */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
                <CardDescription>Top 5 produtos por volume de vendas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Fumê Profissional</p>
                      <p className="text-sm">124 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[80%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Residencial de Controle Solar</p>
                      <p className="text-sm">98 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Anti-Risco Premium</p>
                      <p className="text-sm">87 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[55%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Espelhada Prata</p>
                      <p className="text-sm">65 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[40%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película de Segurança Residencial</p>
                      <p className="text-sm">52 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[30%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Todos os Produtos
                </Button>
              </CardFooter>
            </Card>

            {/* Métodos de Pagamento */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Métodos de Pagamento</CardTitle>
                <CardDescription>Distribuição por forma de pagamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[180px] w-full bg-muted/20 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Pagamentos</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">Cartão de Crédito</span>
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Pix</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Boleto</span>
                    </div>
                    <span className="text-sm font-medium">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Outros</span>
                    </div>
                    <span className="text-sm font-medium">2%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Relatório Detalhado
                </Button>
              </CardFooter>
            </Card>

            {/* Vendas por Região */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Vendas por Região</CardTitle>
                <CardDescription>Distribuição geográfica de vendas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[180px] w-full bg-muted/20 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Regiões</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">Sudeste</span>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Sul</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Nordeste</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Centro-Oeste</span>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Norte</span>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Mapa Detalhado
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Vendas Recentes e Atividades */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Vendas Recentes */}
            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Vendas Recentes</CardTitle>
                <CardDescription>Últimas 10 vendas realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSales.map((sale) => (
                    <div key={sale.id} className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={sale.avatar} alt={sale.name} />
                        <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                        <p className="text-sm text-muted-foreground">{sale.product}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-sm font-medium">+R$ {sale.amount.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">{sale.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Todas as Vendas
                </Button>
              </CardFooter>
            </Card>

            {/* Atividades Recentes */}
            <Card className="col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Atividades Recentes</CardTitle>
                <CardDescription>Últimas atividades do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`rounded-full p-1 ${activity.iconBg} mr-3 mt-0.5`}>{activity.icon}</div>
                      <div className="space-y-1">
                        <p className="text-sm">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Todas as Atividades
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Análise de Tráfego */}
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Análise de Tráfego</CardTitle>
                <CardDescription>Visitas e conversões nos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Tráfego</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="space-y-1 text-center">
                    <p className="text-sm font-medium text-muted-foreground">Visitas</p>
                    <p className="text-2xl font-bold">24.512</p>
                    <p className="text-xs text-green-500">+12.5%</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <p className="text-sm font-medium text-muted-foreground">Conversões</p>
                    <p className="text-2xl font-bold">784</p>
                    <p className="text-xs text-green-500">+8.2%</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
                    <p className="text-2xl font-bold">3.2%</p>
                    <p className="text-xs text-green-500">+0.5%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fontes de Tráfego */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Fontes de Tráfego</CardTitle>
                <CardDescription>Origem das visitas ao site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[180px] w-full bg-muted/20 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Fontes</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">Busca Orgânica</span>
                    </div>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Redes Sociais</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Tráfego Direto</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Anúncios</span>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Outros</span>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Dispositivos */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Dispositivos</CardTitle>
                <CardDescription>Acessos por tipo de dispositivo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[180px] w-full bg-muted/20 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de Dispositivos</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">Mobile</span>
                    </div>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Desktop</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Tablet</span>
                    </div>
                    <span className="text-sm font-medium">4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comportamento do Usuário */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Comportamento do Usuário</CardTitle>
                <CardDescription>Métricas de engajamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Tempo Médio no Site</p>
                      <p className="text-sm font-bold">3m 42s</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%]" />
                    </div>
                    <p className="text-xs text-green-500">+12% em relação ao mês anterior</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Páginas por Sessão</p>
                      <p className="text-sm font-bold">4.2</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[70%]" />
                    </div>
                    <p className="text-xs text-green-500">+8% em relação ao mês anterior</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Taxa de Rejeição</p>
                      <p className="text-sm font-bold">32%</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[32%]" />
                    </div>
                    <p className="text-xs text-red-500">+2% em relação ao mês anterior</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Páginas Mais Visitadas */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Páginas Mais Visitadas</CardTitle>
                <CardDescription>Top 5 páginas por visualizações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Página Inicial</p>
                      <p className="text-sm">8,245 visitas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Películas Veiculares</p>
                      <p className="text-sm">6,148 visitas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[75%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Películas Residenciais</p>
                      <p className="text-sm">4,385 visitas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[55%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Fumê Profissional</p>
                      <p className="text-sm">3,642 visitas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[45%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Contato</p>
                      <p className="text-sm">2,871 visitas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[35%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Relatórios Gerados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Nos últimos 30 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Relatórios Agendados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Ativos atualmente</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Exportações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">Nos últimos 30 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Usuários com Acesso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Administradores e gerentes</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Relatórios Recentes</CardTitle>
              <CardDescription>Últimos relatórios gerados no sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Relatório</TableHead>
                    <TableHead>Gerado por</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.name}</TableCell>
                      <TableCell>{report.user}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.type}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Baixar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Eye className="mr-2 h-4 w-4" />
                Ver Todos os Relatórios
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios Agendados</CardTitle>
                <CardDescription>Relatórios configurados para geração automática</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Frequência</TableHead>
                      <TableHead>Próxima Execução</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Vendas Semanais</TableCell>
                      <TableCell>Toda Segunda</TableCell>
                      <TableCell>20/03/2023</TableCell>
                      <TableCell>
                        <Badge variant="success">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Estoque Mensal</TableCell>
                      <TableCell>Todo dia 1</TableCell>
                      <TableCell>01/04/2023</TableCell>
                      <TableCell>
                        <Badge variant="success">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Desempenho de Produtos</TableCell>
                      <TableCell>Quinzenal</TableCell>
                      <TableCell>15/03/2023</TableCell>
                      <TableCell>
                        <Badge variant="success">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Análise de Clientes</TableCell>
                      <TableCell>Mensal</TableCell>
                      <TableCell>01/04/2023</TableCell>
                      <TableCell>
                        <Badge variant="success">Ativo</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Relatórios Favoritos</CardTitle>
                <CardDescription>Seus relatórios mais acessados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Vendas por Período</p>
                        <p className="text-xs text-muted-foreground">Acessado 28 vezes</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Desempenho de Produtos</p>
                        <p className="text-xs text-muted-foreground">Acessado 24 vezes</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Análise de Clientes</p>
                        <p className="text-xs text-muted-foreground">Acessado 18 vezes</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Estoque e Inventário</p>
                        <p className="text-xs text-muted-foreground">Acessado 15 vezes</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="marketplaces" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Vendas em Marketplaces</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 18.450,75</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  <span>+15.3% em relação ao mês passado</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pedidos em Marketplaces</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  <span>+10.2% em relação ao mês passado</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Produtos Sincronizados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145/156</div>
                <p className="text-xs text-muted-foreground">93% dos produtos sincronizados</p>
                <Progress value={93} className="h-1 mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Marketplaces Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Mercado Livre, Amazon, Shopee</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Marketplace</CardTitle>
              <CardDescription>Comparativo de vendas entre marketplaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center mb-4">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Gráfico de Desempenho</span>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <h4 className="font-medium">Mercado Livre</h4>
                    </div>
                    <div className="font-medium">R$ 8.450,50</div>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[50%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>45.8% das vendas</span>
                    <span>125 pedidos</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                      <h4 className="font-medium">Amazon</h4>
                    </div>
                    <div className="font-medium">R$ 6.780,25</div>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[35%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>36.7% das vendas</span>
                    <span>85 pedidos</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <h4 className="font-medium">Shopee</h4>
                    </div>
                    <div className="font-medium">R$ 3.220,00</div>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[15%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>17.5% das vendas</span>
                    <span>35 pedidos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos em Marketplaces</CardTitle>
                <CardDescription>Top produtos por volume de vendas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Fumê Profissional</p>
                      <p className="text-sm">68 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[80%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Anti-Risco Premium</p>
                      <p className="text-sm">52 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Residencial de Controle Solar</p>
                      <p className="text-sm">45 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[55%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película Espelhada Prata</p>
                      <p className="text-sm">38 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[40%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Película de Segurança Residencial</p>
                      <p className="text-sm">32 vendas</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[30%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status de Sincronização</CardTitle>
                <CardDescription>Status atual das integrações com marketplaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                        <Image
                          src="/placeholder.svg?height=40&width=40&text=ML"
                          alt="Mercado Livre"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Mercado Livre</p>
                        <p className="text-xs text-muted-foreground">Última sincronização: Hoje, 14:32</p>
                      </div>
                    </div>
                    <Badge variant="success">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                        <Image
                          src="/placeholder.svg?height=40&width=40&text=AMZ"
                          alt="Amazon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Amazon</p>
                        <p className="text-xs text-muted-foreground">Última sincronização: Hoje, 10:15</p>
                      </div>
                    </div>
                    <Badge variant="success">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-md overflow-hidden border">
                        <Image
                          src="/placeholder.svg?height=40&width=40&text=SHP"
                          alt="Shopee"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Shopee</p>
                        <p className="text-xs text-muted-foreground">Última sincronização: Há 2 dias</p>
                      </div>
                    </div>
                    <Badge variant="warning">Atenção</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Sincronizar Todos
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Atalhos Rápidos */}
      <Card>
        <CardHeader>
          <CardTitle>Atalhos Rápidos</CardTitle>
          <CardDescription>Acesse rapidamente as principais funcionalidades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/admin/pedidos">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <ShoppingBag className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Pedidos</span>
              </div>
            </Link>
            <Link href="/admin/produtos">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <Package className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Produtos</span>
              </div>
            </Link>
            <Link href="/admin/clientes">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <Users className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Clientes</span>
              </div>
            </Link>
            <Link href="/admin/estoque">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <Layers className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Estoque</span>
              </div>
            </Link>
            <Link href="/admin/relatorios">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <BarChart3 className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Relatórios</span>
              </div>
            </Link>
            <Link href="/admin/integracao">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <ExternalLink className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Integrações</span>
              </div>
            </Link>
            <Link href="/admin/configuracoes">
              <div className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                <Settings className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm font-medium">Configurações</span>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Dados de exemplo
const recentSales = [
  {
    id: 1,
    name: "Marcos Silva",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Fumê Profissional",
    amount: 249.99,
    date: "Há 2 horas",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Residencial de Controle Solar",
    amount: 89.99,
    date: "Há 3 horas",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Anti-Risco Premium",
    amount: 349.99,
    date: "Há 5 horas",
  },
  {
    id: 4,
    name: "Juliana Costa",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Fumê Profissional",
    amount: 249.99,
    date: "Há 6 horas",
  },
  {
    id: 5,
    name: "Roberto Almeida",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Anti-Risco Premium",
    amount: 349.99,
    date: "Há 8 horas",
  },
  {
    id: 6,
    name: "Fernanda Santos",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Fumê Escura",
    amount: 179.99,
    date: "Há 10 horas",
  },
  {
    id: 7,
    name: "Paulo Rodrigues",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Espelhada Prata",
    amount: 129.99,
    date: "Há 12 horas",
  },
  {
    id: 8,
    name: "Mariana Lima",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película de Segurança Residencial",
    amount: 199.99,
    date: "Há 14 horas",
  },
  {
    id: 9,
    name: "Lucas Oliveira",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Decorativa Jateada",
    amount: 149.99,
    date: "Há 16 horas",
  },
  {
    id: 10,
    name: "Camila Souza",
    avatar: "/placeholder.svg?height=32&width=32",
    product: "Película Anti-UV Premium",
    amount: 179.99,
    date: "Há 18 horas",
  },
]

const recentActivities = [
  {
    icon: <ShoppingCart className="h-4 w-4 text-white" />,
    iconBg: "bg-green-500",
    description: "Novo pedido #10052 recebido",
    time: "Há 30 minutos",
  },
  {
    icon: <Users className="h-4 w-4 text-white" />,
    iconBg: "bg-blue-500",
    description: "Novo cliente cadastrado: Mariana Lima",
    time: "Há 1 hora",
  },
  {
    icon: <Package className="h-4 w-4 text-white" />,
    iconBg: "bg-orange-500",
    description: "Pedido #10045 enviado para entrega",
    time: "Há 2 horas",
  },
  {
    icon: <AlertCircle className="h-4 w-4 text-white" />,
    iconBg: "bg-red-500",
    description: "Estoque baixo: Película Fumê Profissional (5 unidades)",
    time: "Há 3 horas",
  },
  {
    icon: <Star className="h-4 w-4 text-white" />,
    iconBg: "bg-yellow-500",
    description: "Nova avaliação: 5 estrelas para Película Anti-Risco Premium",
    time: "Há 4 horas",
  },
  {
    icon: <RefreshCw className="h-4 w-4 text-white" />,
    iconBg: "bg-purple-500",
    description: "Sincronização com Mercado Livre concluída",
    time: "Há 5 horas",
  },
]

const recentReports = [
  {
    id: 1,
    name: "Relatório de Vendas Mensal",
    user: "Admin",
    date: "17/03/2023",
    type: "PDF",
  },
  {
    id: 2,
    name: "Análise de Desempenho de Produtos",
    user: "Admin",
    date: "16/03/2023",
    type: "Excel",
  },
  {
    id: 3,
    name: "Relatório de Estoque",
    user: "Gerente",
    date: "15/03/2023",
    type: "PDF",
  },
  {
    id: 4,
    name: "Análise de Clientes",
    user: "Admin",
    date: "14/03/2023",
    type: "Excel",
  },
  {
    id: 5,
    name: "Relatório de Vendas por Marketplace",
    user: "Admin",
    date: "13/03/2023",
    type: "PDF",
  },
]


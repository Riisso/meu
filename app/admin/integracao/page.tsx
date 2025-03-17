import type { Metadata } from "next"
import Image from "next/image"
import { AlertCircle, Plus, RefreshCw, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Integração com Marketplaces | Painel Administrativo",
  description: "Configure e gerencie integrações com Mercado Livre, Amazon, Shopee e outros marketplaces.",
}

export default function MarketplaceIntegrationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Integração com Marketplaces</h2>
          <p className="text-muted-foreground">
            Configure e gerencie integrações com Mercado Livre, Amazon, Shopee e outros marketplaces.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sincronizar Tudo
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Integração
          </Button>
        </div>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>
          Mantenha suas credenciais de API seguras e nunca compartilhe seus tokens de acesso. Recomendamos revisar as
          permissões regularmente.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="connected" className="space-y-4">
        <TabsList>
          <TabsTrigger value="connected">Conectados</TabsTrigger>
          <TabsTrigger value="available">Disponíveis</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        {/* Aba de Marketplaces Conectados */}
        <TabsContent value="connected" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mercado Livre */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">Mercado Livre</CardTitle>
                    <CardDescription>Conectado em 15/03/2023</CardDescription>
                  </div>
                  <Badge variant="success">Ativo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=ML"
                      alt="Mercado Livre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Loja PelículasPremium</p>
                    <p className="text-sm text-muted-foreground">ID: ML123456789</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Produtos sincronizados:</span>
                    <span className="font-medium">145/156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pedidos pendentes:</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Última sincronização:</span>
                    <span className="font-medium">Hoje, 14:32</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-3 w-3" />
                  Configurar
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Sincronizar
                </Button>
              </CardFooter>
            </Card>

            {/* Amazon */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">Amazon</CardTitle>
                    <CardDescription>Conectado em 20/03/2023</CardDescription>
                  </div>
                  <Badge variant="success">Ativo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=AMZ"
                      alt="Amazon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">PelículasPremium Store</p>
                    <p className="text-sm text-muted-foreground">ID: AMZ987654321</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Produtos sincronizados:</span>
                    <span className="font-medium">98/156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pedidos pendentes:</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Última sincronização:</span>
                    <span className="font-medium">Hoje, 10:15</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-3 w-3" />
                  Configurar
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Sincronizar
                </Button>
              </CardFooter>
            </Card>

            {/* Shopee */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">Shopee</CardTitle>
                    <CardDescription>Conectado em 05/04/2023</CardDescription>
                  </div>
                  <Badge variant="warning">Atenção</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=SHP"
                      alt="Shopee"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">PelículasPremium</p>
                    <p className="text-sm text-muted-foreground">ID: SHP567891234</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Produtos sincronizados:</span>
                    <span className="font-medium">120/156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pedidos pendentes:</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Última sincronização:</span>
                    <span className="font-medium text-amber-500">Há 2 dias</span>
                  </div>
                </div>
                <Alert className="mt-4" variant="warning">
                  <AlertCircle className="h-3 w-3" />
                  <AlertDescription className="text-xs">Token de acesso expira em 2 dias</AlertDescription>
                </Alert>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-3 w-3" />
                  Configurar
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Sincronizar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Aba de Marketplaces Disponíveis */}
        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Magalu */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">Magazine Luiza</CardTitle>
                    <CardDescription>Marketplace brasileiro</CardDescription>
                  </div>
                  <Badge variant="outline">Disponível</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=MGL"
                      alt="Magazine Luiza"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Magazine Luiza</p>
                    <p className="text-sm text-muted-foreground">Integre sua loja com o Magalu</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Venda seus produtos no Magazine Luiza, um dos maiores marketplaces do Brasil. Acesse milhões de
                    clientes em potencial.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Conectar
                </Button>
              </CardFooter>
            </Card>

            {/* Americanas */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">Americanas</CardTitle>
                    <CardDescription>Marketplace brasileiro</CardDescription>
                  </div>
                  <Badge variant="outline">Disponível</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=AME"
                      alt="Americanas"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Americanas</p>
                    <p className="text-sm text-muted-foreground">Integre sua loja com a Americanas</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Venda seus produtos na Americanas, um dos maiores marketplaces do Brasil com grande alcance
                    nacional.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Conectar
                </Button>
              </CardFooter>
            </Card>

            {/* Aliexpress */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">AliExpress</CardTitle>
                    <CardDescription>Marketplace global</CardDescription>
                  </div>
                  <Badge variant="outline">Disponível</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=ALI"
                      alt="AliExpress"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">AliExpress</p>
                    <p className="text-sm text-muted-foreground">Integre sua loja com o AliExpress</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Expanda seu negócio globalmente através do AliExpress, alcançando clientes em todo o mundo.</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Conectar
                </Button>
              </CardFooter>
            </Card>

            {/* Olist */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-base">Olist</CardTitle>
                    <CardDescription>Marketplace integrador</CardDescription>
                  </div>
                  <Badge variant="outline">Disponível</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=OLI"
                      alt="Olist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Olist</p>
                    <p className="text-sm text-muted-foreground">Integre sua loja com o Olist</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Venda em múltiplos marketplaces através de uma única integração com o Olist, simplificando sua
                    operação.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Conectar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Aba de Configurações */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>Configure as opções gerais de integração com marketplaces.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-sync">Sincronização Automática</Label>
                    <p className="text-sm text-muted-foreground">Sincronizar automaticamente produtos e pedidos</p>
                  </div>
                  <Switch id="auto-sync" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="stock-sync">Sincronização de Estoque</Label>
                    <p className="text-sm text-muted-foreground">Manter estoque sincronizado entre plataformas</p>
                  </div>
                  <Switch id="stock-sync" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="price-sync">Sincronização de Preços</Label>
                    <p className="text-sm text-muted-foreground">Manter preços sincronizados entre plataformas</p>
                  </div>
                  <Switch id="price-sync" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="order-import">Importação de Pedidos</Label>
                    <p className="text-sm text-muted-foreground">Importar pedidos automaticamente dos marketplaces</p>
                  </div>
                  <Switch id="order-import" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="sync-interval">Intervalo de Sincronização</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="sync-interval">
                    <SelectValue placeholder="Selecione o intervalo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">A cada 15 minutos</SelectItem>
                    <SelectItem value="30">A cada 30 minutos</SelectItem>
                    <SelectItem value="60">A cada hora</SelectItem>
                    <SelectItem value="360">A cada 6 horas</SelectItem>
                    <SelectItem value="720">A cada 12 horas</SelectItem>
                    <SelectItem value="1440">Diariamente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notification-email">Email para Notificações</Label>
                <Input id="notification-email" defaultValue="admin@peliculaspremium.com.br" />
                <p className="text-xs text-muted-foreground">
                  Receba notificações sobre falhas de sincronização e alertas importantes.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Configurações</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mapeamento de Categorias</CardTitle>
              <CardDescription>Configure como suas categorias são mapeadas para os marketplaces.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <Label htmlFor="category-veicular">Películas Veiculares</Label>
                    <p className="text-xs text-muted-foreground">Categoria da loja</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor="ml-veicular" className="text-xs">
                        Mercado Livre
                      </Label>
                      <Select defaultValue="ml-auto-parts">
                        <SelectTrigger id="ml-veicular">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ml-auto-parts">Acessórios para Veículos</SelectItem>
                          <SelectItem value="ml-auto-parts-ext">Acessórios Externos</SelectItem>
                          <SelectItem value="ml-auto-parts-int">Acessórios Internos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="amz-veicular" className="text-xs">
                        Amazon
                      </Label>
                      <Select defaultValue="amz-auto-acc">
                        <SelectTrigger id="amz-veicular">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="amz-auto-acc">Acessórios Automotivos</SelectItem>
                          <SelectItem value="amz-auto-ext">Acessórios Externos</SelectItem>
                          <SelectItem value="amz-auto-int">Acessórios Internos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="shp-veicular" className="text-xs">
                        Shopee
                      </Label>
                      <Select defaultValue="shp-auto">
                        <SelectTrigger id="shp-veicular">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shp-auto">Automotivo</SelectItem>
                          <SelectItem value="shp-auto-acc">Acessórios Automotivos</SelectItem>
                          <SelectItem value="shp-auto-ext">Acessórios Externos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <Label htmlFor="category-residencial">Películas Residenciais</Label>
                    <p className="text-xs text-muted-foreground">Categoria da loja</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor="ml-residencial" className="text-xs">
                        Mercado Livre
                      </Label>
                      <Select defaultValue="ml-home-dec">
                        <SelectTrigger id="ml-residencial">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ml-home-dec">Casa e Decoração</SelectItem>
                          <SelectItem value="ml-home-imp">Melhorias para Casa</SelectItem>
                          <SelectItem value="ml-home-win">Janelas e Acessórios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="amz-residencial" className="text-xs">
                        Amazon
                      </Label>
                      <Select defaultValue="amz-home-imp">
                        <SelectTrigger id="amz-residencial">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="amz-home-imp">Melhorias para Casa</SelectItem>
                          <SelectItem value="amz-home-dec">Casa e Decoração</SelectItem>
                          <SelectItem value="amz-home-win">Janelas e Acessórios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="shp-residencial" className="text-xs">
                        Shopee
                      </Label>
                      <Select defaultValue="shp-home">
                        <SelectTrigger id="shp-residencial">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shp-home">Casa e Decoração</SelectItem>
                          <SelectItem value="shp-home-imp">Melhorias para Casa</SelectItem>
                          <SelectItem value="shp-home-win">Janelas e Acessórios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Mapeamento</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regras de Preço</CardTitle>
              <CardDescription>Configure regras de preço específicas para cada marketplace.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <Label>Mercado Livre</Label>
                    <p className="text-xs text-muted-foreground">Ajuste de preço para o Mercado Livre</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ml-price-rule">Regra de Preço</Label>
                      <Select defaultValue="percentage">
                        <SelectTrigger id="ml-price-rule">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Valor Fixo</SelectItem>
                          <SelectItem value="percentage">Porcentagem</SelectItem>
                          <SelectItem value="same">Mesmo Preço</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ml-price-value">Valor</Label>
                      <div className="flex items-center">
                        <Input id="ml-price-value" defaultValue="10" />
                        <span className="ml-2">%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Aumento de 10% sobre o preço base</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <Label>Amazon</Label>
                    <p className="text-xs text-muted-foreground">Ajuste de preço para a Amazon</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amz-price-rule">Regra de Preço</Label>
                      <Select defaultValue="percentage">
                        <SelectTrigger id="amz-price-rule">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Valor Fixo</SelectItem>
                          <SelectItem value="percentage">Porcentagem</SelectItem>
                          <SelectItem value="same">Mesmo Preço</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amz-price-value">Valor</Label>
                      <div className="flex items-center">
                        <Input id="amz-price-value" defaultValue="15" />
                        <span className="ml-2">%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Aumento de 15% sobre o preço base</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <Label>Shopee</Label>
                    <p className="text-xs text-muted-foreground">Ajuste de preço para a Shopee</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="shp-price-rule">Regra de Preço</Label>
                      <Select defaultValue="percentage">
                        <SelectTrigger id="shp-price-rule">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Valor Fixo</SelectItem>
                          <SelectItem value="percentage">Porcentagem</SelectItem>
                          <SelectItem value="same">Mesmo Preço</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shp-price-value">Valor</Label>
                      <div className="flex items-center">
                        <Input id="shp-price-value" defaultValue="8" />
                        <span className="ml-2">%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Aumento de 8% sobre o preço base</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Regras de Preço</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Aba de Logs */}
        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logs de Sincronização</CardTitle>
              <CardDescription>Histórico de sincronizações e eventos de integração.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Sincronização de Produtos - Mercado Livre</p>
                    <p className="text-xs text-muted-foreground">17/03/2023 - 14:32:45</p>
                  </div>
                  <Badge variant="success">Sucesso</Badge>
                </div>
                <div className="text-sm border p-3 rounded-md bg-muted/50">
                  <p>145 produtos sincronizados com sucesso. 11 produtos atualizados. 0 erros.</p>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Importação de Pedidos - Amazon</p>
                    <p className="text-xs text-muted-foreground">17/03/2023 - 10:15:22</p>
                  </div>
                  <Badge variant="success">Sucesso</Badge>
                </div>
                <div className="text-sm border p-3 rounded-md bg-muted/50">
                  <p>5 novos pedidos importados com sucesso. 0 erros.</p>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Atualização de Estoque - Shopee</p>
                    <p className="text-xs text-muted-foreground">15/03/2023 - 18:45:10</p>
                  </div>
                  <Badge variant="warning">Alerta</Badge>
                </div>
                <div className="text-sm border p-3 rounded-md bg-muted/50">
                  <p>118 produtos atualizados com sucesso. 2 produtos com erro de atualização: SKU-001, SKU-002.</p>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Sincronização de Preços - Todos os Marketplaces</p>
                    <p className="text-xs text-muted-foreground">15/03/2023 - 12:30:05</p>
                  </div>
                  <Badge variant="destructive">Erro</Badge>
                </div>
                <div className="text-sm border p-3 rounded-md bg-muted/50">
                  <p>Falha na conexão com a API da Shopee. Erro: Token de acesso expirado.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Exportar Logs</Button>
              <Button variant="outline">Limpar Logs</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


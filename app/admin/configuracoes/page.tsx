import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Configurações | Painel Administrativo",
  description: "Configure as opções da sua loja.",
}

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
          <p className="text-muted-foreground">Gerencie as configurações da sua loja.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="shipping">Entrega</TabsTrigger>
          <TabsTrigger value="payment">Pagamento</TabsTrigger>
          <TabsTrigger value="emails">Emails</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
        </TabsList>

        {/* Aba de Configurações Gerais */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Loja</CardTitle>
              <CardDescription>Configure as informações básicas da sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Nome da Loja</Label>
                  <Input id="store-name" defaultValue="Películas Premium" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-url">URL da Loja</Label>
                  <Input id="store-url" defaultValue="www.peliculaspremium.com.br" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-description">Descrição da Loja</Label>
                <Textarea
                  id="store-description"
                  defaultValue="Películas de alta qualidade para veículos e residências. Proteção, privacidade e estilo."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-email">Email de Contato</Label>
                  <Input id="store-email" defaultValue="contato@peliculaspremium.com.br" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-phone">Telefone de Contato</Label>
                  <Input id="store-phone" defaultValue="(11) 99999-9999" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-address">Endereço</Label>
                <Textarea
                  id="store-address"
                  defaultValue="Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP: 01310-100"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações Regionais</CardTitle>
              <CardDescription>Configure as opções regionais da sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-country">País</Label>
                  <Select defaultValue="BR">
                    <SelectTrigger id="store-country">
                      <SelectValue placeholder="Selecione um país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BR">Brasil</SelectItem>
                      <SelectItem value="US">Estados Unidos</SelectItem>
                      <SelectItem value="PT">Portugal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-currency">Moeda</Label>
                  <Select defaultValue="BRL">
                    <SelectTrigger id="store-currency">
                      <SelectValue placeholder="Selecione uma moeda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BRL">Real (R$)</SelectItem>
                      <SelectItem value="USD">Dólar ($)</SelectItem>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-language">Idioma</Label>
                  <Select defaultValue="pt-BR">
                    <SelectTrigger id="store-language">
                      <SelectValue placeholder="Selecione um idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en-US">Inglês (EUA)</SelectItem>
                      <SelectItem value="es">Espanhol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-timezone">Fuso Horário</Label>
                  <Select defaultValue="America/Sao_Paulo">
                    <SelectTrigger id="store-timezone">
                      <SelectValue placeholder="Selecione um fuso horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Sao_Paulo">Brasília (GMT-3)</SelectItem>
                      <SelectItem value="America/Manaus">Manaus (GMT-4)</SelectItem>
                      <SelectItem value="America/New_York">Nova York (GMT-5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-date-format">Formato de Data</Label>
                  <Select defaultValue="DD/MM/YYYY">
                    <SelectTrigger id="store-date-format">
                      <SelectValue placeholder="Selecione um formato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DD/MM/YYYY">DD/MM/AAAA</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/AAAA</SelectItem>
                      <SelectItem value="YYYY-MM-DD">AAAA-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
              <CardDescription>Configure os links para suas redes sociais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="social-facebook">Facebook</Label>
                  <Input id="social-facebook" defaultValue="https://facebook.com/peliculaspremium" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="social-instagram">Instagram</Label>
                  <Input id="social-instagram" defaultValue="https://instagram.com/peliculaspremium" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="social-twitter">Twitter</Label>
                  <Input id="social-twitter" defaultValue="https://twitter.com/peliculaspremium" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="social-youtube">YouTube</Label>
                  <Input id="social-youtube" defaultValue="https://youtube.com/peliculaspremium" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Configurações de Entrega */}
        <TabsContent value="shipping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Entrega</CardTitle>
              <CardDescription>Configure os métodos de entrega disponíveis na sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">SEDEX</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Entrega expressa em até 3 dias úteis</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">PAC</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Entrega econômica em até 10 dias úteis</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Transportadora</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Entrega via transportadora parceira</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Retirada na Loja</h3>
                      <Badge variant="outline" className="ml-2">
                        Inativo
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Cliente retira o pedido na loja física</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regras de Frete Grátis</CardTitle>
              <CardDescription>Configure as regras para oferecer frete grátis.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="enable-free-shipping" defaultChecked />
                <Label htmlFor="enable-free-shipping">Habilitar Frete Grátis</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="free-shipping-min">Valor Mínimo para Frete Grátis (R$)</Label>
                <Input id="free-shipping-min" type="number" defaultValue="300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="free-shipping-regions">Regiões Elegíveis</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="free-shipping-regions">
                    <SelectValue placeholder="Selecione as regiões" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todo o Brasil</SelectItem>
                    <SelectItem value="southeast">Sudeste</SelectItem>
                    <SelectItem value="south">Sul</SelectItem>
                    <SelectItem value="northeast">Nordeste</SelectItem>
                    <SelectItem value="midwest">Centro-Oeste</SelectItem>
                    <SelectItem value="north">Norte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações de Embalagem</CardTitle>
              <CardDescription>Configure as opções de embalagem para seus produtos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="enable-gift-wrap" defaultChecked />
                <Label htmlFor="enable-gift-wrap">Oferecer Embalagem para Presente</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gift-wrap-price">Preço da Embalagem para Presente (R$)</Label>
                <Input id="gift-wrap-price" type="number" defaultValue="15" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="packaging-note">Mensagem de Embalagem</Label>
                <Textarea
                  id="packaging-note"
                  defaultValue="Seus produtos são embalados com cuidado para garantir a integridade durante o transporte."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Configurações de Pagamento */}
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Configure os métodos de pagamento disponíveis na sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Cartão de Crédito</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Aceite pagamentos com cartões de crédito</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Boleto Bancário</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Aceite pagamentos via boleto bancário</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">PIX</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Aceite pagamentos instantâneos via PIX</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Transferência Bancária</h3>
                      <Badge variant="outline" className="ml-2">
                        Inativo
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Aceite pagamentos via transferência bancária</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações de Parcelamento</CardTitle>
              <CardDescription>
                Configure as opções de parcelamento para pagamentos com cartão de crédito.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="max-installments">Número Máximo de Parcelas</Label>
                <Select defaultValue="12">
                  <SelectTrigger id="max-installments">
                    <SelectValue placeholder="Selecione o número máximo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1x</SelectItem>
                    <SelectItem value="3">3x</SelectItem>
                    <SelectItem value="6">6x</SelectItem>
                    <SelectItem value="12">12x</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-installment-value">Valor Mínimo da Parcela (R$)</Label>
                <Input id="min-installment-value" type="number" defaultValue="50" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="interest-free" defaultChecked />
                <Label htmlFor="interest-free">Parcelamento sem Juros</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-free-installments">Parcelas sem Juros</Label>
                <Select defaultValue="6">
                  <SelectTrigger id="interest-free-installments">
                    <SelectValue placeholder="Selecione o número" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">Até 3x</SelectItem>
                    <SelectItem value="6">Até 6x</SelectItem>
                    <SelectItem value="12">Até 12x</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Configurações de Emails */}
        <TabsContent value="emails" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Email</CardTitle>
              <CardDescription>Configure as opções de envio de emails para sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email-from">Email de Origem</Label>
                  <Input id="email-from" defaultValue="contato@peliculaspremium.com.br" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-name">Nome de Exibição</Label>
                  <Input id="email-name" defaultValue="Películas Premium" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-reply">Email de Resposta</Label>
                <Input id="email-reply" defaultValue="suporte@peliculaspremium.com.br" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notificações por Email</CardTitle>
              <CardDescription>Configure quais emails serão enviados automaticamente.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-new-order">Novo Pedido</Label>
                    <p className="text-sm text-muted-foreground">Enviar email quando um novo pedido for realizado</p>
                  </div>
                  <Switch id="email-new-order" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-order-status">Atualização de Status</Label>
                    <p className="text-sm text-muted-foreground">
                      Enviar email quando o status do pedido for atualizado
                    </p>
                  </div>
                  <Switch id="email-order-status" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-shipping">Informações de Envio</Label>
                    <p className="text-sm text-muted-foreground">Enviar email com informações de rastreamento</p>
                  </div>
                  <Switch id="email-shipping" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-abandoned-cart">Carrinho Abandonado</Label>
                    <p className="text-sm text-muted-foreground">
                      Enviar email para clientes com carrinhos abandonados
                    </p>
                  </div>
                  <Switch id="email-abandoned-cart" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-newsletter">Newsletter</Label>
                    <p className="text-sm text-muted-foreground">Enviar emails promocionais e newsletters</p>
                  </div>
                  <Switch id="email-newsletter" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Configurações de Integrações */}
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
              <CardDescription>Configure as integrações com serviços externos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Google Analytics</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Integração com Google Analytics para análise de tráfego
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Facebook Pixel</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Integração com Facebook Pixel para rastreamento de conversões
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">WhatsApp Business</h3>
                      <Badge variant="outline" className="ml-2">
                        Inativo
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Integração com WhatsApp Business para atendimento ao cliente
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <h3 className="font-medium">Correios</h3>
                      <Badge className="ml-2">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Integração com API dos Correios para cálculo de frete
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chaves de API</CardTitle>
              <CardDescription>Configure as chaves de API para integrações.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-google">Google Analytics ID</Label>
                <Input id="api-google" defaultValue="UA-123456789-1" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-facebook">Facebook Pixel ID</Label>
                <Input id="api-facebook" defaultValue="123456789012345" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-correios">Chave de API dos Correios</Label>
                <Input id="api-correios" defaultValue="********-****-****-****-************" type="password" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Configurações de Usuários */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Usuários Administrativos</CardTitle>
              <CardDescription>Gerencie os usuários com acesso ao painel administrativo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Admin</h3>
                    <p className="text-sm text-muted-foreground">admin@peliculaspremium.com.br</p>
                  </div>
                  <Badge>Administrador</Badge>
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">João Silva</h3>
                    <p className="text-sm text-muted-foreground">joao.silva@peliculaspremium.com.br</p>
                  </div>
                  <Badge variant="outline">Gerente</Badge>
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Maria Oliveira</h3>
                    <p className="text-sm text-muted-foreground">maria.oliveira@peliculaspremium.com.br</p>
                  </div>
                  <Badge variant="outline">Vendedor</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Adicionar Novo Usuário
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permissões</CardTitle>
              <CardDescription>Configure as permissões para cada tipo de usuário.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Administrador</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-products">Gerenciar Produtos</Label>
                      <Switch id="admin-products" defaultChecked disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-orders">Gerenciar Pedidos</Label>
                      <Switch id="admin-orders" defaultChecked disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-users">Gerenciar Usuários</Label>
                      <Switch id="admin-users" defaultChecked disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-settings">Gerenciar Configurações</Label>
                      <Switch id="admin-settings" defaultChecked disabled />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Gerente</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="manager-products">Gerenciar Produtos</Label>
                      <Switch id="manager-products" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="manager-orders">Gerenciar Pedidos</Label>
                      <Switch id="manager-orders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="manager-users">Gerenciar Usuários</Label>
                      <Switch id="manager-users" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="manager-settings">Gerenciar Configurações</Label>
                      <Switch id="manager-settings" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Vendedor</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="seller-products">Gerenciar Produtos</Label>
                      <Switch id="seller-products" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="seller-orders">Gerenciar Pedidos</Label>
                      <Switch id="seller-orders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="seller-users">Gerenciar Usuários</Label>
                      <Switch id="seller-users" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="seller-settings">Gerenciar Configurações</Label>
                      <Switch id="seller-settings" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


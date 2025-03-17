import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Minha Conta | Películas Premium",
  description: "Gerencie seus dados, pedidos e preferências.",
}

export default function AccountPage() {
  // Em um ambiente real, buscaríamos os dados do usuário
  // Para este exemplo, usaremos dados estáticos
  const user = {
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    phone: "(21) 99876-5432",
    address: "Rua das Flores, 123",
    neighborhood: "Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    postalCode: "20000-000",
  }

  const orders = [
    {
      id: "10047",
      date: "25/06/2023",
      status: "Entregue",
      total: 349.99,
      items: 2,
    },
    {
      id: "10035",
      date: "12/05/2023",
      status: "Entregue",
      total: 249.99,
      items: 1,
    },
    {
      id: "10022",
      date: "03/04/2023",
      status: "Entregue",
      total: 99.99,
      items: 1,
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Minha Conta</h1>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Perfil</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center">
            <Package className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Pedidos</span>
          </TabsTrigger>
          <TabsTrigger value="addresses" className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Endereços</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Configurações</span>
          </TabsTrigger>
        </TabsList>

        {/* Aba de Perfil */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Atualize seus dados pessoais e informações de contato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue={user.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input id="current-password" type="password" placeholder="Digite sua senha atual" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" placeholder="Digite sua nova senha" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirme sua nova senha" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Pedidos */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Meus Pedidos</CardTitle>
              <CardDescription>Acompanhe o status dos seus pedidos</CardDescription>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div>
                          <h3 className="font-medium">Pedido #{order.id}</h3>
                          <p className="text-sm text-muted-foreground">Realizado em {order.date}</p>
                        </div>
                        <Badge className="mt-2 sm:mt-0">{order.status}</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                        <div>
                          <p>
                            {order.items} {order.items === 1 ? "item" : "itens"}
                          </p>
                          <p className="font-medium">Total: R$ {order.total.toFixed(2)}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <Link href={`/conta/pedidos/${order.id}`}>
                            <Button variant="outline" size="sm">
                              Ver Detalhes
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Você ainda não realizou nenhum pedido.</p>
                  <Link href="/produtos">
                    <Button>Explorar Produtos</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Endereços */}
        <TabsContent value="addresses">
          <Card>
            <CardHeader>
              <CardTitle>Meus Endereços</CardTitle>
              <CardDescription>Gerencie seus endereços de entrega</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Endereço Principal</h3>
                  <Badge variant="outline">Padrão</Badge>
                </div>
                <p className="text-sm">{user.name}</p>
                <p className="text-sm">{user.address}</p>
                <p className="text-sm">
                  {user.neighborhood}, {user.city} - {user.state}
                </p>
                <p className="text-sm">CEP: {user.postalCode}</p>
                <p className="text-sm">Telefone: {user.phone}</p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="flex justify-center">
                <Button variant="outline">Adicionar Novo Endereço</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Configurações */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Configurações da Conta</CardTitle>
              <CardDescription>Gerencie suas preferências e configurações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Notificações</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Notificações por Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba atualizações sobre seus pedidos e promoções
                      </p>
                    </div>
                    <div className="ml-auto">
                      <input
                        type="checkbox"
                        id="email-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">Notificações por SMS</Label>
                      <p className="text-sm text-muted-foreground">Receba atualizações sobre seus pedidos via SMS</p>
                    </div>
                    <div className="ml-auto">
                      <input type="checkbox" id="sms-notifications" className="h-4 w-4 rounded border-gray-300" />
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-notifications">Emails de Marketing</Label>
                      <p className="text-sm text-muted-foreground">Receba ofertas especiais e novidades</p>
                    </div>
                    <div className="ml-auto">
                      <input
                        type="checkbox"
                        id="marketing-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Privacidade</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-sharing">Compartilhamento de Dados</Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir compartilhamento de dados para melhorar a experiência
                      </p>
                    </div>
                    <div className="ml-auto">
                      <input
                        type="checkbox"
                        id="data-sharing"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Salvar Preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


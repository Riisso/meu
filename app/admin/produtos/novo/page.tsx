import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Plus, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "Novo Produto | Painel Administrativo",
  description: "Adicione um novo produto ao catálogo.",
}

export default function NewProductPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link href="/admin/produtos" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Novo Produto</h2>
          </div>
          <p className="text-muted-foreground">Adicione um novo produto ao catálogo da loja.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar Produto</Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Informações Gerais</TabsTrigger>
          <TabsTrigger value="images">Imagens</TabsTrigger>
          <TabsTrigger value="pricing">Preços</TabsTrigger>
          <TabsTrigger value="inventory">Estoque</TabsTrigger>
          <TabsTrigger value="specifications">Especificações</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        {/* Aba de Informações Gerais */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>Defina as informações básicas do produto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Produto</Label>
                <Input id="name" placeholder="Ex: Película Fumê Profissional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" placeholder="Descreva o produto em detalhes..." className="min-h-32" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="veicular">Película Veicular</SelectItem>
                      <SelectItem value="residencial">Película Residencial</SelectItem>
                      <SelectItem value="comercial">Película Comercial</SelectItem>
                      <SelectItem value="acessorios">Acessórios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subcategory">Subcategoria</Label>
                  <Select>
                    <SelectTrigger id="subcategory">
                      <SelectValue placeholder="Selecione uma subcategoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fume">Fumê</SelectItem>
                      <SelectItem value="anti-risco">Anti-risco</SelectItem>
                      <SelectItem value="espelhada">Espelhada</SelectItem>
                      <SelectItem value="seguranca">Segurança</SelectItem>
                      <SelectItem value="controle-solar">Controle Solar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Marca</Label>
                <Select>
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Selecione uma marca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunguard">SunGuard</SelectItem>
                    <SelectItem value="visionshield">VisionShield</SelectItem>
                    <SelectItem value="ultratint">UltraTint</SelectItem>
                    <SelectItem value="premiumfilm">PremiumFilm</SelectItem>
                    <SelectItem value="clearview">ClearView</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="featured" />
                <Label htmlFor="featured">Produto em Destaque</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active" defaultChecked />
                <Label htmlFor="active">Produto Ativo</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Imagens */}
        <TabsContent value="images" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Imagens do Produto</CardTitle>
              <CardDescription>Adicione imagens para mostrar o produto aos clientes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Área de upload principal */}
                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer hover:border-primary">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    Arraste e solte ou clique para fazer upload da imagem principal
                  </p>
                  <input type="file" className="hidden" />
                </div>

                {/* Áreas de upload adicionais */}
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer hover:border-primary"
                  >
                    <Plus className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">Adicionar imagem {index + 1}</p>
                    <input type="file" className="hidden" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Formatos aceitos: JPG, PNG ou WebP. Tamanho máximo: 5MB.</p>
                <p>Recomendação: Imagens com pelo menos 800x800 pixels para melhor qualidade.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Preços */}
        <TabsContent value="pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Preço</CardTitle>
              <CardDescription>Configure os preços e promoções do produto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Preço (R$)</Label>
                  <Input id="price" type="number" placeholder="0.00" step="0.01" min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cost">Custo (R$)</Label>
                  <Input id="cost" type="number" placeholder="0.00" step="0.01" min="0" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="compare-price">Preço Comparativo (R$)</Label>
                  <Input id="compare-price" type="number" placeholder="0.00" step="0.01" min="0" />
                  <p className="text-xs text-muted-foreground">
                    Exibido como preço original quando o produto está em promoção.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Desconto (%)</Label>
                  <Input id="discount" type="number" placeholder="0" min="0" max="100" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="on-sale" />
                  <Label htmlFor="on-sale">Produto em Promoção</Label>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="sale-start">Início da Promoção</Label>
                    <Input id="sale-start" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sale-end">Fim da Promoção</Label>
                    <Input id="sale-end" type="date" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Estoque */}
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Estoque</CardTitle>
              <CardDescription>Configure as informações de estoque e disponibilidade.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="track-inventory" defaultChecked />
                <Label htmlFor="track-inventory">Controlar Estoque</Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU (Código do Produto)</Label>
                  <Input id="sku" placeholder="Ex: PEL-FUM-001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="barcode">Código de Barras (EAN)</Label>
                  <Input id="barcode" placeholder="Ex: 7891234567890" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantidade em Estoque</Label>
                  <Input id="quantity" type="number" min="0" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="low-stock">Alerta de Estoque Baixo</Label>
                  <Input id="low-stock" type="number" min="0" placeholder="10" />
                  <p className="text-xs text-muted-foreground">
                    Você receberá um alerta quando o estoque atingir este valor.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock-status">Status do Estoque</Label>
                <Select defaultValue="in-stock">
                  <SelectTrigger id="stock-status">
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-stock">Em Estoque</SelectItem>
                    <SelectItem value="out-of-stock">Fora de Estoque</SelectItem>
                    <SelectItem value="backorder">Em Espera</SelectItem>
                    <SelectItem value="pre-order">Pré-venda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="allow-backorders" />
                <Label htmlFor="allow-backorders">Permitir Pedidos Mesmo Sem Estoque</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Especificações */}
        <TabsContent value="specifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Especificações Técnicas</CardTitle>
              <CardDescription>Adicione as especificações técnicas do produto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {/* Especificação 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="spec-name-1">Nome da Especificação</Label>
                    <Input id="spec-name-1" placeholder="Ex: Material" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spec-value-1">Valor</Label>
                    <Input id="spec-value-1" placeholder="Ex: Poliéster metalizado" />
                  </div>
                </div>

                {/* Especificação 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="spec-name-2">Nome da Especificação</Label>
                    <Input id="spec-name-2" placeholder="Ex: Espessura" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spec-value-2">Valor</Label>
                    <Input id="spec-value-2" placeholder="Ex: 2 mil (0,05mm)" />
                  </div>
                </div>

                {/* Especificação 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="spec-name-3">Nome da Especificação</Label>
                    <Input id="spec-name-3" placeholder="Ex: Redução de calor" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spec-value-3">Valor</Label>
                    <Input id="spec-value-3" placeholder="Ex: 60%" />
                  </div>
                </div>

                {/* Especificação 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="spec-name-4">Nome da Especificação</Label>
                    <Input id="spec-name-4" placeholder="Ex: Bloqueio UV" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spec-value-4">Valor</Label>
                    <Input id="spec-value-4" placeholder="Ex: 99%" />
                  </div>
                </div>

                {/* Especificação 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="spec-name-5">Nome da Especificação</Label>
                    <Input id="spec-name-5" placeholder="Ex: Garantia" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spec-value-5">Valor</Label>
                    <Input id="spec-value-5" placeholder="Ex: 5 anos" />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Especificação
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de SEO */}
        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Otimização para Motores de Busca (SEO)</CardTitle>
              <CardDescription>
                Configure as informações para melhorar o posicionamento nos motores de busca.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Título da Página (Meta Title)</Label>
                <Input id="meta-title" placeholder="Ex: Película Fumê Profissional | Películas Premium" />
                <p className="text-xs text-muted-foreground">Recomendado: até 60 caracteres.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-description">Descrição da Página (Meta Description)</Label>
                <Textarea
                  id="meta-description"
                  placeholder="Ex: Película Fumê Profissional com proteção UV e redução de calor para seu veículo. Qualidade premium e garantia de 5 anos."
                  className="min-h-20"
                />
                <p className="text-xs text-muted-foreground">Recomendado: entre 120 e 160 caracteres.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="url-slug">Slug da URL</Label>
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">/produto/</span>
                  <Input id="url-slug" placeholder="pelicula-fume-profissional" />
                </div>
                <p className="text-xs text-muted-foreground">Use apenas letras minúsculas, números e hífens.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Palavras-chave</Label>
                <Input id="keywords" placeholder="película, fumê, veicular, proteção solar, UV" />
                <p className="text-xs text-muted-foreground">Separe as palavras-chave com vírgulas.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


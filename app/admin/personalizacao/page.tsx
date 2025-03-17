import type { Metadata } from "next"
import Image from "next/image"
import { Facebook, Instagram, Save, Twitter, Upload, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ColorPicker } from "@/components/admin/color-picker"

export const metadata: Metadata = {
  title: "Personalização do Site | Painel Administrativo",
  description: "Personalize rapidamente a aparência e informações do seu site.",
}

export default function SiteCustomizationPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Personalização do Site</h2>
          <p className="text-muted-foreground">Altere rapidamente a aparência e informações do seu site.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Visualizar Site</Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>

      <Tabs defaultValue="branding" className="space-y-4">
        <TabsList>
          <TabsTrigger value="branding">Identidade Visual</TabsTrigger>
          <TabsTrigger value="social">Redes Sociais</TabsTrigger>
          <TabsTrigger value="banners">Banners</TabsTrigger>
          <TabsTrigger value="colors">Cores</TabsTrigger>
          <TabsTrigger value="texts">Textos</TabsTrigger>
        </TabsList>

        {/* Aba de Identidade Visual */}
        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logo e Favicon</CardTitle>
              <CardDescription>Personalize a identidade visual da sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Logo Principal</Label>
                <div className="flex items-start gap-6">
                  <div className="border rounded-md p-4 flex items-center justify-center bg-white w-64 h-32">
                    <div className="relative w-full h-full">
                      <Image
                        src="/placeholder.svg?height=80&width=240"
                        alt="Logo atual"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-32 cursor-pointer hover:border-primary">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground text-center">
                        Arraste e solte ou clique para fazer upload da nova logo
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Formatos aceitos: PNG, SVG ou WebP. Tamanho recomendado: 240x80 pixels.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Logo Mobile</Label>
                <div className="flex items-start gap-6">
                  <div className="border rounded-md p-4 flex items-center justify-center bg-white w-24 h-24">
                    <div className="relative w-full h-full">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Logo mobile atual"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-32 cursor-pointer hover:border-primary">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground text-center">
                        Arraste e solte ou clique para fazer upload da nova logo mobile
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Formatos aceitos: PNG, SVG ou WebP. Tamanho recomendado: 60x60 pixels.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-start gap-6">
                  <div className="border rounded-md p-4 flex items-center justify-center bg-white w-16 h-16">
                    <div className="relative w-full h-full">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Favicon atual"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-32 cursor-pointer hover:border-primary">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground text-center">
                        Arraste e solte ou clique para fazer upload do novo favicon
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Formatos aceitos: ICO, PNG ou SVG. Tamanho recomendado: 32x32 pixels.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nome e Slogan</CardTitle>
              <CardDescription>Personalize o nome e slogan da sua loja.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Nome da Loja</Label>
                <Input id="store-name" defaultValue="PelículasPremium" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-slogan">Slogan</Label>
                <Input id="store-slogan" defaultValue="Películas de Alta Qualidade para Veículos e Residências" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-description">Descrição Curta</Label>
                <Textarea
                  id="store-description"
                  defaultValue="Proteção, privacidade e estilo para seu carro e sua casa com nossas películas premium."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Redes Sociais */}
        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
              <CardDescription>Configure os links e ícones das redes sociais exibidos no site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="show-social" defaultChecked />
                  <Label htmlFor="show-social">Exibir ícones de redes sociais no site</Label>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white flex-shrink-0">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="facebook-url">Facebook</Label>
                      <Input id="facebook-url" defaultValue="https://facebook.com/peliculaspremium" />
                    </div>
                    <div className="pt-8">
                      <Switch id="show-facebook" defaultChecked />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 text-white flex-shrink-0">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="instagram-url">Instagram</Label>
                      <Input id="instagram-url" defaultValue="https://instagram.com/peliculaspremium" />
                    </div>
                    <div className="pt-8">
                      <Switch id="show-instagram" defaultChecked />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white flex-shrink-0">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="twitter-url">Twitter</Label>
                      <Input id="twitter-url" defaultValue="https://twitter.com/peliculaspremium" />
                    </div>
                    <div className="pt-8">
                      <Switch id="show-twitter" defaultChecked />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white flex-shrink-0">
                      <Youtube className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="youtube-url">YouTube</Label>
                      <Input id="youtube-url" defaultValue="https://youtube.com/peliculaspremium" />
                    </div>
                    <div className="pt-8">
                      <Switch id="show-youtube" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="social-position">Posição dos Ícones</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="header" name="social-position" defaultChecked />
                    <Label htmlFor="header">Cabeçalho</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="footer" name="social-position" />
                    <Label htmlFor="footer">Rodapé</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="both" name="social-position" />
                    <Label htmlFor="both">Ambos</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>WhatsApp e Contato Rápido</CardTitle>
              <CardDescription>Configure o botão de WhatsApp e informações de contato rápido.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="show-whatsapp" defaultChecked />
                <Label htmlFor="show-whatsapp">Exibir botão de WhatsApp flutuante</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp-number">Número do WhatsApp</Label>
                <Input id="whatsapp-number" defaultValue="5511999999999" />
                <p className="text-xs text-muted-foreground">
                  Digite o número com código do país e DDD, sem espaços ou caracteres especiais.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp-message">Mensagem Pré-definida</Label>
                <Input id="whatsapp-message" defaultValue="Olá! Gostaria de saber mais sobre as películas." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Banners */}
        <TabsContent value="banners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Banner Principal</CardTitle>
              <CardDescription>Personalize o banner principal da página inicial.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Banner Atual</Label>
                <div className="border rounded-md overflow-hidden">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src="/placeholder.svg?height=400&width=1200"
                      alt="Banner atual"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Novo Banner</Label>
                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-40 cursor-pointer hover:border-primary">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    Arraste e solte ou clique para fazer upload do novo banner
                  </p>
                  <input type="file" className="hidden" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Formatos aceitos: JPG, PNG ou WebP. Tamanho recomendado: 1920x600 pixels.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="banner-title">Título do Banner</Label>
                  <Input id="banner-title" defaultValue="Películas de Alta Qualidade para Veículos e Residências" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="banner-subtitle">Subtítulo do Banner</Label>
                  <Input
                    id="banner-subtitle"
                    defaultValue="Proteção, privacidade e estilo para seu carro e sua casa com nossas películas premium."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="button1-text">Texto do Botão 1</Label>
                    <Input id="button1-text" defaultValue="Películas Veiculares" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="button1-link">Link do Botão 1</Label>
                    <Input id="button1-link" defaultValue="/produtos/veicular" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="button2-text">Texto do Botão 2</Label>
                    <Input id="button2-text" defaultValue="Películas Residenciais" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="button2-link">Link do Botão 2</Label>
                    <Input id="button2-link" defaultValue="/produtos/residencial" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Banners Promocionais</CardTitle>
              <CardDescription>Gerencie os banners promocionais exibidos no site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Banner Promocional 1 */}
                <div className="space-y-4 border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Banner Promocional 1</h3>
                    <Switch id="show-promo1" defaultChecked />
                  </div>
                  <div className="relative w-full h-[120px] border rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Banner promocional 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo1-title">Título</Label>
                    <Input id="promo1-title" defaultValue="Promoção de Verão" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo1-link">Link</Label>
                    <Input id="promo1-link" defaultValue="/promocoes/verao" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Alterar Imagem
                  </Button>
                </div>

                {/* Banner Promocional 2 */}
                <div className="space-y-4 border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Banner Promocional 2</h3>
                    <Switch id="show-promo2" defaultChecked />
                  </div>
                  <div className="relative w-full h-[120px] border rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Banner promocional 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo2-title">Título</Label>
                    <Input id="promo2-title" defaultValue="Frete Grátis" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo2-link">Link</Label>
                    <Input id="promo2-link" defaultValue="/promocoes/frete-gratis" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Alterar Imagem
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Adicionar Novo Banner Promocional
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Cores */}
        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cores do Tema</CardTitle>
              <CardDescription>Personalize as cores principais do seu site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Cor Primária</Label>
                    <div className="flex items-center gap-4">
                      <ColorPicker defaultValue="#0f172a" />
                      <Input id="primary-color" defaultValue="#0f172a" className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground">Usada em botões, links e elementos de destaque.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Cor Secundária</Label>
                    <div className="flex items-center gap-4">
                      <ColorPicker defaultValue="#6366f1" />
                      <Input id="secondary-color" defaultValue="#6366f1" className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground">Usada em elementos secundários e acentos.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accent-color">Cor de Destaque</Label>
                    <div className="flex items-center gap-4">
                      <ColorPicker defaultValue="#f43f5e" />
                      <Input id="accent-color" defaultValue="#f43f5e" className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Usada para elementos que precisam de destaque especial.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="background-color">Cor de Fundo</Label>
                    <div className="flex items-center gap-4">
                      <ColorPicker defaultValue="#ffffff" />
                      <Input id="background-color" defaultValue="#ffffff" className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground">Cor de fundo principal do site.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="text-color">Cor do Texto</Label>
                    <div className="flex items-center gap-4">
                      <ColorPicker defaultValue="#1e293b" />
                      <Input id="text-color" defaultValue="#1e293b" className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground">Cor principal para textos.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="muted-color">Cor de Texto Secundário</Label>
                    <div className="flex items-center gap-4">
                      <ColorPicker defaultValue="#64748b" />
                      <Input id="muted-color" defaultValue="#64748b" className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground">Cor para textos secundários e menos importantes.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Pré-visualização</h3>
                <div className="border rounded-md p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">Exemplo de Título</h4>
                    <p className="text-muted-foreground">Este é um exemplo de texto secundário.</p>
                  </div>
                  <div className="flex gap-2">
                    <Button>Botão Primário</Button>
                    <Button variant="secondary">Botão Secundário</Button>
                    <Button variant="outline">Botão Outline</Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Habilitar Modo Escuro</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Textos */}
        <TabsContent value="texts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Textos da Página Inicial</CardTitle>
              <CardDescription>Personalize os textos exibidos na página inicial.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="featured-title">Título da Seção de Produtos em Destaque</Label>
                <Input id="featured-title" defaultValue="Produtos em Destaque" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="featured-description">Descrição da Seção de Produtos em Destaque</Label>
                <Textarea
                  id="featured-description"
                  defaultValue="Conheça nossas películas mais vendidas para veículos e residências"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="benefits-title">Título da Seção de Benefícios</Label>
                <Input id="benefits-title" defaultValue="Por que escolher nossas películas?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="benefits-description">Descrição da Seção de Benefícios</Label>
                <Textarea
                  id="benefits-description"
                  defaultValue="Benefícios que fazem a diferença para seu veículo e sua residência"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Textos do Rodapé</CardTitle>
              <CardDescription>Personalize os textos exibidos no rodapé do site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="footer-about">Texto Sobre a Empresa</Label>
                <Textarea
                  id="footer-about"
                  defaultValue="Oferecendo as melhores soluções em películas para veículos e residências desde 2010."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-copyright">Texto de Copyright</Label>
                <Input
                  id="footer-copyright"
                  defaultValue={`© ${currentYear} PelículasPremium. Todos os direitos reservados.`}
                />
                <p className="text-xs text-muted-foreground">
                  Use {currentYear} para inserir o ano atual automaticamente.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-address">Endereço</Label>
                <Textarea
                  id="footer-address"
                  defaultValue="Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP: 01310-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-phone">Telefone</Label>
                <Input id="footer-phone" defaultValue="(11) 99999-9999" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-email">Email</Label>
                <Input id="footer-email" defaultValue="contato@peliculaspremium.com.br" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mensagens do Sistema</CardTitle>
              <CardDescription>Personalize as mensagens exibidas em diferentes situações.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cart-empty">Carrinho Vazio</Label>
                <Input id="cart-empty" defaultValue="Seu carrinho está vazio" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cart-empty-message">Mensagem de Carrinho Vazio</Label>
                <Textarea
                  id="cart-empty-message"
                  defaultValue="Parece que você ainda não adicionou nenhum produto ao seu carrinho."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-success">Pedido Realizado com Sucesso</Label>
                <Input id="order-success" defaultValue="Pedido Confirmado!" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-success-message">Mensagem de Pedido Realizado</Label>
                <Textarea id="order-success-message" defaultValue="Seu pedido foi recebido e está sendo processado." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="out-of-stock">Produto Esgotado</Label>
                <Input id="out-of-stock" defaultValue="Produto Esgotado" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="out-of-stock-message">Mensagem de Produto Esgotado</Label>
                <Textarea
                  id="out-of-stock-message"
                  defaultValue="Este produto está temporariamente indisponível. Por favor, volte mais tarde."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


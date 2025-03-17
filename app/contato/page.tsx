import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Contato | Películas Premium",
  description: "Entre em contato conosco para tirar dúvidas, solicitar orçamentos ou agendar uma visita.",
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-12 md:mb-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Entre em Contato</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos prontos para atender você! Entre em contato conosco para tirar dúvidas, solicitar orçamentos ou
          agendar uma visita.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Diversas formas de entrar em contato conosco</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-sm text-muted-foreground">(11) 4567-8901</p>
                  <p className="text-sm text-muted-foreground">(11) 98765-4321 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">contato@peliculaspremium.com.br</p>
                  <p className="text-sm text-muted-foreground">vendas@peliculaspremium.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Endereço</h3>
                  <p className="text-sm text-muted-foreground">
                    Av. Paulista, 1234 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                    <br />
                    Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Horário de Funcionamento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 13h
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-2">Redes Sociais</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Envie sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="message" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="message">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Mensagem
                  </TabsTrigger>
                  <TabsTrigger value="quote">
                    <Send className="h-4 w-4 mr-2" />
                    Orçamento
                  </TabsTrigger>
                  <TabsTrigger value="support">
                    <Phone className="h-4 w-4 mr-2" />
                    Suporte
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="message" className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Digite sua mensagem..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">Enviar Mensagem</Button>
                </TabsContent>

                <TabsContent value="quote" className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-name">Nome Completo</Label>
                      <Input id="quote-name" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-email">Email</Label>
                      <Input id="quote-email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-phone">Telefone</Label>
                      <Input id="quote-phone" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-type">Tipo de Serviço</Label>
                      <select
                        id="quote-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione o tipo de serviço</option>
                        <option value="veicular">Película Veicular</option>
                        <option value="residencial">Película Residencial</option>
                        <option value="comercial">Película Comercial</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-details">Detalhes do Orçamento</Label>
                    <Textarea
                      id="quote-details"
                      placeholder="Descreva em detalhes o que você precisa..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">Solicitar Orçamento</Button>
                </TabsContent>

                <TabsContent value="support" className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="support-name">Nome Completo</Label>
                      <Input id="support-name" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-email">Email</Label>
                      <Input id="support-email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="support-phone">Telefone</Label>
                      <Input id="support-phone" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-order">Número do Pedido (se aplicável)</Label>
                      <Input id="support-order" placeholder="Ex: #12345" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="support-issue">Descreva o Problema</Label>
                    <Textarea
                      id="support-issue"
                      placeholder="Descreva em detalhes o problema que está enfrentando..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">Enviar Solicitação de Suporte</Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section className="mb-12 md:mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Nossa Localização</CardTitle>
            <CardDescription>Visite nossa loja principal em São Paulo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full bg-muted rounded-md overflow-hidden">
              {/* Placeholder for map - in a real application, you would embed a Google Maps iframe here */}
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <MapPin className="h-12 w-12 text-muted-foreground" />
                <span className="sr-only">Mapa da localização</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
          <p className="text-muted-foreground mt-2">Encontre respostas para as dúvidas mais comuns</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Qual é o prazo de instalação das películas?</AccordionTrigger>
            <AccordionContent>
              O prazo de instalação varia de acordo com o tipo de serviço. Para veículos, geralmente leva de 2 a 4
              horas. Para residências, o prazo depende da quantidade de janelas, mas normalmente conseguimos finalizar
              em 1 dia para residências de porte médio.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>As películas possuem garantia?</AccordionTrigger>
            <AccordionContent>
              Sim, todas as nossas películas possuem garantia. As películas veiculares têm garantia de 3 a 5 anos,
              dependendo do modelo. Já as películas residenciais possuem garantia de 5 a 10 anos. A garantia cobre
              bolhas, descolamento e desbotamento.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Vocês atendem em domicílio?</AccordionTrigger>
            <AccordionContent>
              Sim, oferecemos serviço de instalação em domicílio para películas residenciais. Para películas veiculares,
              a instalação é realizada em nossas lojas, onde temos ambiente controlado para garantir a melhor qualidade
              na aplicação.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Quais formas de pagamento vocês aceitam?</AccordionTrigger>
            <AccordionContent>
              Aceitamos diversas formas de pagamento: dinheiro, PIX, cartões de crédito e débito, transferência bancária
              e boleto. Para compras no cartão de crédito, oferecemos parcelamento em até 12x sem juros, dependendo do
              valor da compra.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Quanto tempo devo esperar após a instalação para lavar o veículo ou limpar os vidros?
            </AccordionTrigger>
            <AccordionContent>
              Recomendamos aguardar pelo menos 7 dias após a instalação antes de lavar o veículo ou limpar os vidros.
              Esse período é necessário para a cura completa do adesivo da película. Após esse prazo, você pode realizar
              a limpeza normalmente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>As películas veiculares são legalizadas?</AccordionTrigger>
            <AccordionContent>
              Sim, todas as nossas películas veiculares estão de acordo com a legislação brasileira. Seguimos
              rigorosamente a Resolução 254 do CONTRAN, que estabelece os limites de transparência para cada tipo de
              vidro do veículo. Fornecemos certificado de conformidade para todas as instalações.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudar você a encontrar a melhor solução para suas necessidades. Entre em
          contato agora mesmo!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            <Phone className="mr-2 h-4 w-4" />
            (11) 4567-8901
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            size="lg"
          >
            <Mail className="mr-2 h-4 w-4" />
            contato@peliculaspremium.com.br
          </Button>
        </div>
      </section>
    </div>
  )
}


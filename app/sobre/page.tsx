import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Users, Award, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Sobre Nós | Películas Premium",
  description: "Conheça nossa história, missão, valores e equipe.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Sobre a Películas Premium</h1>
            <p className="text-lg text-muted-foreground">
              Desde 2010, somos referência em soluções de películas para veículos e residências, oferecendo produtos de
              alta qualidade e atendimento personalizado.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">+10.000 clientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">+50.000 instalações</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Garantia de 5 anos</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Equipe Películas Premium"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="mb-12 md:mb-16">
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mission">Missão</TabsTrigger>
            <TabsTrigger value="vision">Visão</TabsTrigger>
            <TabsTrigger value="values">Valores</TabsTrigger>
          </TabsList>
          <TabsContent value="mission" className="p-6 border rounded-md mt-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Proporcionar conforto, segurança e estética através de soluções em películas de alta qualidade,
                contribuindo para a economia de energia e proteção contra os raios solares, com atendimento
                personalizado e excelência em instalação.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center p-4 border rounded-md">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Qualidade</h4>
                  <p className="text-sm text-muted-foreground">Produtos premium com garantia estendida</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-md">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Atendimento</h4>
                  <p className="text-sm text-muted-foreground">Suporte personalizado e consultoria técnica</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-md">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Excelência</h4>
                  <p className="text-sm text-muted-foreground">Instalação profissional e acabamento perfeito</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="vision" className="p-6 border rounded-md mt-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida como a empresa líder no mercado de películas para veículos e residências no Brasil,
                referência em inovação, qualidade e sustentabilidade, expandindo nossa atuação para todo o território
                nacional e contribuindo para um futuro mais eficiente energeticamente.
              </p>
              <div className="relative h-[200px] md:h-[300px] rounded-xl overflow-hidden mt-6">
                <Image
                  src="/placeholder.svg?height=300&width=800"
                  alt="Visão da empresa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="values" className="p-6 border rounded-md mt-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nossos Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3 p-4 border rounded-md">
                  <div className="bg-primary/10 p-2 h-fit rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Integridade</h4>
                    <p className="text-sm text-muted-foreground">
                      Agimos com honestidade e transparência em todas as nossas relações.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-md">
                  <div className="bg-primary/10 p-2 h-fit rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Inovação</h4>
                    <p className="text-sm text-muted-foreground">
                      Buscamos constantemente novas tecnologias e soluções para nossos clientes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-md">
                  <div className="bg-primary/10 p-2 h-fit rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sustentabilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprometidos com práticas ambientalmente responsáveis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-md">
                  <div className="bg-primary/10 p-2 h-fit rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Excelência</h4>
                    <p className="text-sm text-muted-foreground">
                      Buscamos a perfeição em cada instalação e atendimento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-md">
                  <div className="bg-primary/10 p-2 h-fit rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Respeito</h4>
                    <p className="text-sm text-muted-foreground">Valorizamos cada cliente, colaborador e parceiro.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-md">
                  <div className="bg-primary/10 p-2 h-fit rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Compromisso</h4>
                    <p className="text-sm text-muted-foreground">Cumprimos o que prometemos, sempre.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Nossa História */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Nossa História</h2>
          <p className="text-muted-foreground mt-2">Conheça a trajetória da Películas Premium ao longo dos anos</p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold mb-3">2010 - O Início</h3>
              <p className="text-muted-foreground">
                A Películas Premium nasceu da paixão de três amigos por carros e tecnologia. Começamos com uma pequena
                loja em São Paulo, focada exclusivamente em películas automotivas, com apenas 5 funcionários e muita
                determinação.
              </p>
            </div>
            <div className="relative h-[250px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Início da empresa em 2010"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[250px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=250&width=400" alt="Expansão em 2015" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">2015 - Expansão</h3>
              <p className="text-muted-foreground">
                Após 5 anos de crescimento constante, expandimos nosso catálogo para incluir películas residenciais e
                comerciais. Abrimos nossa segunda loja e iniciamos parcerias com grandes fornecedores internacionais,
                trazendo tecnologias inovadoras para o mercado brasileiro.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold mb-3">2018 - Loja Online</h3>
              <p className="text-muted-foreground">
                Lançamos nossa plataforma de e-commerce, permitindo que clientes de todo o Brasil tivessem acesso aos
                nossos produtos. Implementamos um sistema de consultoria online e expandimos nossa rede de instaladores
                credenciados para garantir a qualidade em todo o território nacional.
              </p>
            </div>
            <div className="relative h-[250px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Lançamento da loja online em 2018"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[250px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=250&width=400" alt="Presente em 2023" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">2023 - Presente</h3>
              <p className="text-muted-foreground">
                Hoje, a Películas Premium conta com 5 lojas físicas, mais de 100 colaboradores e uma rede de mais de 200
                instaladores credenciados em todo o Brasil. Somos líderes no segmento e continuamos inovando com
                produtos sustentáveis e tecnologias de ponta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Nossa Equipe</h2>
          <p className="text-muted-foreground mt-2">Conheça os profissionais que fazem a Películas Premium acontecer</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative h-[250px]">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">O Que Nossos Clientes Dizem</h2>
          <p className="text-muted-foreground mt-2">
            Veja os depoimentos de quem já utilizou nossos produtos e serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar seu veículo ou residência?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Entre em contato conosco hoje mesmo e descubra como nossas películas podem proporcionar mais conforto,
          economia e proteção.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Ver Produtos
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            size="lg"
          >
            Fale Conosco
          </Button>
        </div>
      </section>
    </div>
  )
}

// Dados de exemplo
const teamMembers = [
  {
    name: "Carlos Oliveira",
    role: "CEO & Fundador",
    description: "Especialista em películas com mais de 15 anos de experiência no mercado.",
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    name: "Ana Silva",
    role: "Diretora de Operações",
    description: "Responsável por garantir a excelência em todos os processos da empresa.",
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    name: "Roberto Santos",
    role: "Gerente Técnico",
    description: "Especialista em instalação e treinamento da equipe técnica.",
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    name: "Juliana Costa",
    role: "Gerente de Marketing",
    description: "Responsável pelas estratégias de comunicação e crescimento da marca.",
    image: "/placeholder.svg?height=250&width=250",
  },
]

const testimonials = [
  {
    name: "Marcos Almeida",
    location: "São Paulo, SP",
    rating: 5,
    text: "Instalei a película fumê no meu carro e a diferença é incrível! Reduziu muito o calor e a privacidade ficou excelente. Atendimento de primeira!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Fernanda Lima",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Coloquei película residencial em toda minha casa e a economia de energia foi notável. A instalação foi rápida e o acabamento perfeito.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ricardo Souza",
    location: "Belo Horizonte, MG",
    rating: 4,
    text: "Ótimo custo-benefício! A película anti-risco para o carro superou minhas expectativas. Recomendo a todos.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]


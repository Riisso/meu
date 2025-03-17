import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Películas de Alta Qualidade para Veículos e Residências
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Proteção, privacidade e estilo para seu carro e sua casa com nossas películas premium.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/produtos/veicular">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Películas Veiculares
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/produtos/residencial">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Películas Residenciais
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Película automotiva aplicada"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produtos em Destaque</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça nossas películas mais vendidas para veículos e residências
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <Link href={`/produto/${product.id}`} key={product.id} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="text-lg font-bold">R$ {product.price.toFixed(2)}</div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Adicionar ao Carrinho
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/produtos">
              <Button size="lg">
                Ver Todos os Produtos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Por que escolher nossas películas?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Benefícios que fazem a diferença para seu veículo e sua residência
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border bg-white shadow-sm"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredProducts = [
  {
    id: "1",
    name: "Película Fumê Profissional",
    category: "Veicular",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    name: "Película Residencial de Controle Solar",
    category: "Residencial",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    name: "Película Anti-Risco Premium",
    category: "Veicular",
    price: 349.99,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const benefits = [
  {
    icon: <div className="w-10 h-10 flex items-center justify-center">🌡️</div>,
    title: "Controle de Temperatura",
    description: "Reduz o calor interno em até 60%, proporcionando maior conforto e economia de energia.",
  },
  {
    icon: <div className="w-10 h-10 flex items-center justify-center">🛡️</div>,
    title: "Proteção UV",
    description: "Bloqueia até 99% dos raios UV nocivos, protegendo sua pele e os interiores.",
  },
  {
    icon: <div className="w-10 h-10 flex items-center justify-center">🔒</div>,
    title: "Privacidade e Segurança",
    description: "Aumenta a privacidade e dificulta a visualização do interior, melhorando a segurança.",
  },
  {
    icon: <div className="w-10 h-10 flex items-center justify-center">✨</div>,
    title: "Estética Aprimorada",
    description: "Melhora a aparência do seu veículo ou residência com um visual sofisticado.",
  },
  {
    icon: <div className="w-10 h-10 flex items-center justify-center">💰</div>,
    title: "Economia de Energia",
    description: "Reduz a necessidade de ar condicionado, economizando energia e dinheiro.",
  },
  {
    icon: <div className="w-10 h-10 flex items-center justify-center">⏱️</div>,
    title: "Durabilidade",
    description: "Materiais de alta qualidade que garantem anos de desempenho sem degradação.",
  },
]


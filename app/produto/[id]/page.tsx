import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProductById } from "@/lib/services/product-service"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductById(Number(params.id))

  if (!product) {
    return {
      title: "Produto não encontrado | Películas Premium",
      description: "O produto que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${product.name} | Películas Premium`,
    description: product.description.substring(0, 160),
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Buscar o produto do banco de dados
  const product = await getProductById(Number(params.id))

  // Se o produto não existir, retornar 404
  if (!product) {
    notFound()
  }

  // Calcular o preço com desconto, se houver
  const discountedPrice =
    product.discount > 0 ? ((product.price * (100 - product.discount)) / 100).toFixed(2) : product.price.toFixed(2)

  // Buscar produtos relacionados (simplificado para o exemplo)
  const relatedProducts = [
    {
      id: "2",
      name: "Película Anti-Risco Premium",
      category: "Veicular",
      price: 349.99,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: "3",
      name: "Película Fumê Escura",
      category: "Veicular",
      price: 179.99,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: "4",
      name: "Película Espelhada Prata",
      category: "Veicular",
      price: 299.99,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">
          Início
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href={`/produtos/${product.category.toLowerCase()}`} className="hover:underline">
          Películas {product.category === "veicular" ? "Veiculares" : "Residenciais"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Imagens do Produto */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images?.[0] || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.discount > 0 && (
              <Badge variant="destructive" className="absolute top-4 left-4">
                -{product.discount}%
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {(product.images || ["/placeholder.svg?height=600&width=600"]).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-md border cursor-pointer hover:border-primary"
              >
                <Image
                  src={image || "/placeholder.svg?height=600&width=600"}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações do Produto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(4.8) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">4.8 (124 avaliações)</span>
            </div>
          </div>

          <div>
            {product.discount > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">R$ {discountedPrice}</span>
                <span className="text-lg text-muted-foreground line-through">R$ {product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-3xl font-bold">R$ {product.price.toFixed(2)}</span>
            )}
            <p className="text-sm text-muted-foreground mt-1">
              Em até 12x de R$ {(Number.parseFloat(discountedPrice) / 12).toFixed(2)} sem juros
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Descrição:</p>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Destaques:</p>
            <ul className="space-y-1">
              {Object.entries(product.specifications || {}).map(([key, value], index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span> {key}: {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <Truck className="h-4 w-4 mr-2" />
            <span>Frete grátis para todo o Brasil</span>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-4">Quantidade:</span>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">1</span>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="ml-4 text-sm text-muted-foreground">{product.stock} unidades disponíveis</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button size="lg" variant="secondary" className="flex-1">
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Abas de Informações */}
      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Especificações</TabsTrigger>
          <TabsTrigger value="installation">Instalação</TabsTrigger>
          <TabsTrigger value="reviews">Avaliações</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications || {}).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b">
                <span className="font-medium">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="installation" className="p-4 border rounded-md mt-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Instruções de Instalação</h3>
            <p className="text-muted-foreground">
              Recomendamos que a instalação seja feita por um profissional qualificado para garantir o melhor resultado.
              A aplicação incorreta pode resultar em bolhas, vincos ou descolamento prematuro.
            </p>
            <h4 className="font-medium mt-4">Processo de Instalação:</h4>
            <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
              <li>Limpeza completa da superfície de vidro</li>
              <li>Medição e corte preciso da película</li>
              <li>Aplicação de solução facilitadora</li>
              <li>Posicionamento cuidadoso da película</li>
              <li>Remoção de bolhas e excesso de água</li>
              <li>Secagem e acabamento final</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              Após a instalação, evite lavar os vidros por pelo menos 7 dias para permitir a cura completa da película.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="p-4 border rounded-md mt-2">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Avaliações dos Clientes</h3>
              <Button>Escrever Avaliação</Button>
            </div>

            <div className="space-y-4">
              {/* Avaliação 1 */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <h4 className="font-medium mt-1">Excelente produto!</h4>
                  </div>
                  <span className="text-sm text-muted-foreground">12/03/2023</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Instalei no meu carro e ficou perfeito. A redução de calor é impressionante e a privacidade é ótima
                  sem comprometer a visibilidade.
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium">Carlos M.</span>
                  <Badge variant="outline" className="ml-2">
                    Compra verificada
                  </Badge>
                </div>
              </div>

              {/* Avaliação 2 */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <h4 className="font-medium mt-1">Muito bom, mas poderia ser melhor</h4>
                  </div>
                  <span className="text-sm text-muted-foreground">28/02/2023</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  A qualidade da película é boa e a instalação foi tranquila. A única ressalva é que esperava uma
                  redução de calor um pouco maior, mas ainda assim estou satisfeito.
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium">Ana P.</span>
                  <Badge variant="outline" className="ml-2">
                    Compra verificada
                  </Badge>
                </div>
              </div>

              {/* Avaliação 3 */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <h4 className="font-medium mt-1">Superou minhas expectativas</h4>
                  </div>
                  <span className="text-sm text-muted-foreground">15/02/2023</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Produto de excelente qualidade. Já tinha usado outras marcas antes, mas essa realmente faz diferença
                  na redução de calor. A privacidade é perfeita e não atrapalha a visibilidade à noite.
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium">Marcos S.</span>
                  <Badge variant="outline" className="ml-2">
                    Compra verificada
                  </Badge>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Ver Mais Avaliações
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Produtos Relacionados */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Produtos Relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <Link href={`/produto/${relatedProduct.id}`} key={relatedProduct.id} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover p-4"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{relatedProduct.category}</p>
                  <p className="font-bold mt-2">R$ {relatedProduct.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Filter, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: "Películas Residenciais | Películas Premium",
  description:
    "Encontre as melhores películas para sua residência com proteção UV, controle de temperatura e privacidade.",
}

export default function ResidentialFilmsPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Películas Residenciais</h1>
          <p className="text-muted-foreground mt-2">
            Proteção, privacidade e economia de energia para sua residência com nossas películas de alta qualidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros para desktop */}
          <div className="hidden lg:flex flex-col w-64 space-y-6">
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-medium text-lg">Filtros</h3>

              <div className="space-y-2">
                <h4 className="font-medium">Tipos</h4>
                <div className="space-y-2">
                  {residentialTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type.id}`} />
                      <label htmlFor={`type-${type.id}`} className="text-sm cursor-pointer">
                        {type.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Aplicação</h4>
                <div className="space-y-2">
                  {applications.map((app) => (
                    <div key={app.id} className="flex items-center space-x-2">
                      <Checkbox id={`app-${app.id}`} />
                      <label htmlFor={`app-${app.id}`} className="text-sm cursor-pointer">
                        {app.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Preço</h4>
                <div className="pt-4 px-2">
                  <Slider defaultValue={[0, 500]} max={1000} step={10} />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>R$ 0</span>
                    <span>R$ 1000</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Marcas</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand.id}`} />
                      <label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer">
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-2">Aplicar Filtros</Button>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1">
            <div className="flex flex-col space-y-4">
              {/* Barra de filtros móvel e ordenação */}
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex items-center">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtros
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px] lg:hidden">
                      <div className="py-4 space-y-6">
                        <h3 className="font-medium text-lg">Filtros</h3>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="types">
                            <AccordionTrigger>Tipos</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {residentialTypes.map((type) => (
                                  <div key={type.id} className="flex items-center space-x-2">
                                    <Checkbox id={`mobile-type-${type.id}`} />
                                    <label htmlFor={`mobile-type-${type.id}`} className="text-sm cursor-pointer">
                                      {type.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="applications">
                            <AccordionTrigger>Aplicação</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {applications.map((app) => (
                                  <div key={app.id} className="flex items-center space-x-2">
                                    <Checkbox id={`mobile-app-${app.id}`} />
                                    <label htmlFor={`mobile-app-${app.id}`} className="text-sm cursor-pointer">
                                      {app.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="price">
                            <AccordionTrigger>Preço</AccordionTrigger>
                            <AccordionContent>
                              <div className="pt-4 px-2">
                                <Slider defaultValue={[0, 500]} max={1000} step={10} />
                                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                                  <span>R$ 0</span>
                                  <span>R$ 1000</span>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="brands">
                            <AccordionTrigger>Marcas</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {brands.map((brand) => (
                                  <div key={brand.id} className="flex items-center space-x-2">
                                    <Checkbox id={`mobile-brand-${brand.id}`} />
                                    <label htmlFor={`mobile-brand-${brand.id}`} className="text-sm cursor-pointer">
                                      {brand.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <Button className="w-full mt-4">Aplicar Filtros</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Ordenar por:</span>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Relevância" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevância</SelectItem>
                      <SelectItem value="price-asc">Menor Preço</SelectItem>
                      <SelectItem value="price-desc">Maior Preço</SelectItem>
                      <SelectItem value="newest">Mais Recentes</SelectItem>
                      <SelectItem value="bestseller">Mais Vendidos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Resultados */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Exibindo 9 de 24 produtos</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {residentialFilms.map((product) => (
                    <Link href={`/produto/${product.id}`} key={product.id} className="group">
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative h-[200px] w-full">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          {product.isNew && <Badge className="absolute top-2 right-2">Novo</Badge>}
                          {product.discount > 0 && (
                            <Badge variant="destructive" className="absolute top-2 left-2">
                              -{product.discount}%
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                            </div>
                            <div className="text-right">
                              {product.discount > 0 ? (
                                <>
                                  <span className="text-lg font-bold">
                                    R$ {((product.price * (100 - product.discount)) / 100).toFixed(2)}
                                  </span>
                                  <span className="text-sm text-muted-foreground line-through block">
                                    R$ {product.price.toFixed(2)}
                                  </span>
                                </>
                              ) : (
                                <span className="text-lg font-bold">R$ {product.price.toFixed(2)}</span>
                              )}
                            </div>
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

                {/* Paginação */}
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      &lt;
                    </Button>
                    <Button variant="default" size="icon">
                      1
                    </Button>
                    <Button variant="outline" size="icon">
                      2
                    </Button>
                    <Button variant="outline" size="icon">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      &gt;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dados de exemplo
const residentialTypes = [
  { id: 1, name: "Controle Solar" },
  { id: 2, name: "Privacidade" },
  { id: 3, name: "Decorativa" },
  { id: 4, name: "Segurança" },
  { id: 5, name: "Anti-UV" },
]

const applications = [
  { id: 1, name: "Janelas" },
  { id: 2, name: "Portas de Vidro" },
  { id: 3, name: "Box de Banheiro" },
  { id: 4, name: "Divisórias" },
  { id: 5, name: "Claraboias" },
]

const brands = [
  { id: 1, name: "SunGuard" },
  { id: 2, name: "VisionShield" },
  { id: 3, name: "UltraTint" },
  { id: 4, name: "PremiumFilm" },
  { id: 5, name: "ClearView" },
]

const residentialFilms = [
  {
    id: "101",
    name: "Película Residencial de Controle Solar",
    category: "Controle Solar",
    price: 89.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },
  {
    id: "102",
    name: "Película Espelhada Prata",
    category: "Privacidade",
    price: 129.99,
    discount: 15,
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: "103",
    name: "Película de Segurança Residencial",
    category: "Segurança",
    price: 199.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: "104",
    name: "Película Decorativa Jateada",
    category: "Decorativa",
    price: 149.99,
    discount: 10,
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },
  {
    id: "105",
    name: "Película Anti-UV Premium",
    category: "Anti-UV",
    price: 179.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: "106",
    name: "Película Térmica Residencial",
    category: "Controle Solar",
    price: 159.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: "107",
    name: "Película Blackout",
    category: "Privacidade",
    price: 139.99,
    discount: 5,
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: "108",
    name: "Película Decorativa Listrada",
    category: "Decorativa",
    price: 129.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },
  {
    id: "109",
    name: "Película Anti-Impacto",
    category: "Segurança",
    price: 219.99,
    discount: 0,
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
]


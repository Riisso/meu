import { Sheet } from "@/components/ui/sheet"
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
import { getProductsByCategory } from "@/lib/services/product-service"
import { SheetTrigger } from "@/components/ui/sheet"
import { SheetContent } from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: "Películas Veiculares | Películas Premium",
  description:
    "Encontre as melhores películas para seu veículo com proteção UV, controle de temperatura e privacidade.",
}

export default async function VehicularFilmsPage() {
  // Buscar produtos da categoria veicular do banco de dados
  const vehicularFilms = await getProductsByCategory("veicular")

  // Dados estáticos para categorias, tonalidades e marcas
  const categories = [
    { id: 1, name: "Fumê" },
    { id: 2, name: "Anti-risco" },
    { id: 3, name: "Espelhada" },
    { id: 4, name: "Segurança" },
    { id: 5, name: "Controle Solar" },
  ]

  const tones = [
    { id: 1, name: "Claro (70%)" },
    { id: 2, name: "Médio (50%)" },
    { id: 3, name: "Escuro (30%)" },
    { id: 4, name: "Muito Escuro (15%)" },
    { id: 5, name: "Espelhado" },
  ]

  const brands = [
    { id: 1, name: "SunGuard" },
    { id: 2, name: "VisionShield" },
    { id: 3, name: "UltraTint" },
    { id: 4, name: "PremiumFilm" },
    { id: 5, name: "ClearView" },
  ]

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Películas Veiculares</h1>
          <p className="text-muted-foreground mt-2">
            Proteção, privacidade e estilo para seu veículo com nossas películas de alta qualidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros para desktop */}
          <div className="hidden lg:flex flex-col w-64 space-y-6">
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-medium text-lg">Filtros</h3>

              <div className="space-y-2">
                <h4 className="font-medium">Categorias</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.id}`} />
                      <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Tonalidade</h4>
                <div className="space-y-2">
                  {tones.map((tone) => (
                    <div key={tone.id} className="flex items-center space-x-2">
                      <Checkbox id={`tone-${tone.id}`} />
                      <label htmlFor={`tone-${tone.id}`} className="text-sm cursor-pointer">
                        {tone.name}
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
                          <AccordionItem value="categories">
                            <AccordionTrigger>Categorias</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {categories.map((category) => (
                                  <div key={category.id} className="flex items-center space-x-2">
                                    <Checkbox id={`mobile-category-${category.id}`} />
                                    <label
                                      htmlFor={`mobile-category-${category.id}`}
                                      className="text-sm cursor-pointer"
                                    >
                                      {category.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="tones">
                            <AccordionTrigger>Tonalidade</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {tones.map((tone) => (
                                  <div key={tone.id} className="flex items-center space-x-2">
                                    <Checkbox id={`mobile-tone-${tone.id}`} />
                                    <label htmlFor={`mobile-tone-${tone.id}`} className="text-sm cursor-pointer">
                                      {tone.name}
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
                <p className="text-sm text-muted-foreground mb-4">Exibindo {vehicularFilms.length} produtos</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vehicularFilms.map((product) => (
                    <Link href={`/produto/${product.id}`} key={product.id} className="group">
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative h-[200px] w-full">
                          <Image
                            src={product.images?.[0] || "/placeholder.svg?height=200&width=300"}
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


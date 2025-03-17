import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PlusCircle, Edit, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { getAllProducts } from "@/lib/services/product-service"

export const metadata: Metadata = {
  title: "Gerenciamento de Produtos | Películas Premium",
  description: "Gerencie o catálogo de produtos, estoque e preços.",
}

export default async function ProductsManagement() {
  // Buscar todos os produtos do banco de dados
  const products = await getAllProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Produtos</h2>
          <div className="flex items-center space-x-2">
            <Link href="/admin/produtos/novo">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Produto
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input placeholder="Buscar produtos..." className="w-[300px]" />
            <Button variant="outline">Buscar</Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Exportar</Button>
            <Button variant="outline">Filtrar</Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Produtos</CardTitle>
            <CardDescription>Gerencie seu catálogo de produtos, estoque e preços.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Imagem</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Estoque</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Image
                        src={product.images?.[0] || "/placeholder.svg?height=50&width=50"}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge variant={product.status === "ativo" ? "default" : "secondary"}>{product.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Editar</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">PelículasPremium</h3>
            <p className="text-sm text-muted-foreground">
              Oferecendo as melhores soluções em películas para veículos e residências desde 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produtos/veicular" className="text-muted-foreground hover:text-primary">
                  Películas Veiculares
                </Link>
              </li>
              <li>
                <Link href="/produtos/residencial" className="text-muted-foreground hover:text-primary">
                  Películas Residenciais
                </Link>
              </li>
              <li>
                <Link href="/produtos/comercial" className="text-muted-foreground hover:text-primary">
                  Películas Comerciais
                </Link>
              </li>
              <li>
                <Link href="/acessorios" className="text-muted-foreground hover:text-primary">
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="text-muted-foreground hover:text-primary">
                  Garantia
                </Link>
              </li>
              <li>
                <Link href="/envio" className="text-muted-foreground hover:text-primary">
                  Envio e Entrega
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/reembolso" className="text-muted-foreground hover:text-primary">
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PelículasPremium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


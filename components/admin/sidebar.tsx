"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Layers,
  Tag,
  Gift,
  TrendingUp,
  Truck,
  ExternalLink,
  Palette,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps {
  className?: string
}

export function AdminSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const routes = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Pedidos",
      href: "/admin/pedidos",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Produtos",
      href: "/admin/produtos",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Clientes",
      href: "/admin/clientes",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Estoque",
      href: "/admin/estoque",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Promoções",
      href: "/admin/promocoes",
      icon: <Tag className="h-5 w-5" />,
    },
    {
      title: "Cupons",
      href: "/admin/cupons",
      icon: <Gift className="h-5 w-5" />,
    },
    {
      title: "Relatórios",
      href: "/admin/relatorios",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Entregas",
      href: "/admin/entregas",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Integrações",
      href: "/admin/integracao",
      icon: <ExternalLink className="h-5 w-5" />,
    },
    {
      title: "Personalização",
      href: "/admin/personalizacao",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      title: "Configurações",
      href: "/admin/configuracoes",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  // Sidebar para desktop
  const DesktopSidebar = (
    <div
      className={`hidden lg:flex flex-col h-screen border-r bg-background ${isCollapsed ? "w-[80px]" : "w-[250px]"} transition-all duration-300`}
    >
      <div className="flex h-14 items-center px-4 border-b">
        {!isCollapsed ? (
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Admin Panel</span>
          </Link>
        ) : (
          <Link href="/admin/dashboard" className="flex items-center justify-center w-full">
            <Package className="h-6 w-6" />
          </Link>
        )}
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent ${
                pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              {route.icon}
              {!isCollapsed && <span>{route.title}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {!isCollapsed && (
            <>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Admin</span>
                <span className="text-xs text-muted-foreground">admin@exemplo.com</span>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-1">
          {!isCollapsed && <ThemeToggle />}
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )

  // Sidebar para mobile
  const MobileSidebar = (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <div className="flex h-14 items-center px-4 border-b">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Admin Panel</span>
          </Link>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMobileOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-4 h-[calc(100vh-8rem)]">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent ${
                  pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {route.icon}
                <span>{route.title}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Admin</span>
              <span className="text-xs text-muted-foreground">admin@exemplo.com</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <>
      {DesktopSidebar}
      <div className="lg:hidden flex h-14 items-center px-4 border-b sticky top-0 z-30 bg-background">
        {MobileSidebar}
        <div className="ml-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Admin Panel</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}


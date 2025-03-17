import { type NextRequest, NextResponse } from "next/server"
import { verify } from "jsonwebtoken"

export async function middleware(request: NextRequest) {
  // Rotas que requerem autenticação
  const adminRoutes = [
    "/admin",
    "/admin/produtos",
    "/admin/pedidos",
    "/admin/clientes",
    "/admin/estoque",
    "/admin/promocoes",
    "/admin/cupons",
    "/admin/relatorios",
    "/admin/entregas",
    "/admin/configuracoes",
    "/admin/personalizacao",
    "/admin/integracao",
    "/admin/dashboard",
  ]
  const userRoutes = ["/conta", "/checkout"]

  // Verificar se a rota atual requer autenticação
  const isAdminRoute = adminRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  const isUserRoute = userRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  if (!isAdminRoute && !isUserRoute) {
    return NextResponse.next()
  }

  // Obter o token do cookie
  const token = request.cookies.get("auth_token")?.value

  if (!token) {
    // Redirecionar para a página de login
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    // Verificar o token
    const decoded = verify(token, process.env.JWT_SECRET || "fallback_secret")

    // Verificar se o usuário tem permissão para acessar rotas de admin
    if (isAdminRoute && decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url))
    }

    // Usuário autenticado, continuar
    return NextResponse.next()
  } catch (error) {
    // Token inválido, redirecionar para a página de login
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}


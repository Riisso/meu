import type React from "react"
import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin/sidebar"

export const metadata: Metadata = {
  title: "Painel Administrativo | Películas Premium",
  description: "Painel administrativo para gerenciamento do e-commerce de películas.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}


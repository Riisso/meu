import { db } from "../lib/db"
import { products, users } from "../lib/db-schema"
import bcrypt from "bcryptjs"

async function seed() {
  console.log("Seeding database...")

  try {
    // Criar usuário admin
    const hashedPassword = await bcrypt.hash("admin123", 10)

    await db.insert(users).values({
      name: "Administrador",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    console.log("Admin user created")

    // Criar produtos de exemplo
    const productData = [
      {
        name: "Película Fumê Profissional",
        description:
          "A Película Fumê Profissional oferece proteção UV, redução de calor e privacidade para seu veículo. Fabricada com materiais de alta qualidade, esta película é durável e resistente a arranhões, garantindo anos de desempenho sem degradação.",
        price: 249.99,
        category: "veicular",
        stock: 120,
        status: "ativo",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: {
          Material: "Poliéster metalizado de alta densidade",
          Espessura: "2 mil (0,05mm)",
          "Redução de calor": "60%",
          "Bloqueio UV": "99%",
          "Visibilidade Luminosa": "35%",
          Garantia: "5 anos",
          Aplicação: "Profissional",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Película Residencial de Controle Solar",
        description:
          "Película de alta performance para controle solar em residências. Reduz o calor, bloqueia raios UV e proporciona maior conforto térmico e economia de energia.",
        price: 89.99,
        category: "residencial",
        stock: 85,
        status: "ativo",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: {
          Material: "Poliéster multicamadas",
          Espessura: "1.5 mil (0,038mm)",
          "Redução de calor": "70%",
          "Bloqueio UV": "99%",
          "Visibilidade Luminosa": "50%",
          Garantia: "10 anos",
          Aplicação: "Profissional",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Película Anti-Risco Premium",
        description:
          "Película especial com tecnologia anti-risco para maior durabilidade. Ideal para veículos que circulam em áreas com muita poeira ou estradas de terra.",
        price: 349.99,
        category: "veicular",
        stock: 42,
        status: "ativo",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: {
          Material: "Poliéster com camada protetora",
          Espessura: "3 mil (0,076mm)",
          "Redução de calor": "50%",
          "Bloqueio UV": "98%",
          "Visibilidade Luminosa": "40%",
          Garantia: "7 anos",
          Aplicação: "Profissional",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Película Espelhada Prata",
        description:
          "Película com acabamento espelhado que proporciona privacidade durante o dia e visual sofisticado para residências e escritórios.",
        price: 129.99,
        category: "residencial",
        stock: 67,
        status: "ativo",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: {
          Material: "Poliéster metalizado",
          Espessura: "2 mil (0,05mm)",
          "Redução de calor": "80%",
          "Bloqueio UV": "99%",
          "Visibilidade Luminosa": "20%",
          Garantia: "8 anos",
          Aplicação: "Profissional",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Película de Segurança Residencial",
        description:
          "Película de segurança que mantém os cacos de vidro unidos em caso de quebra, evitando acidentes e aumentando a proteção contra invasões.",
        price: 199.99,
        category: "residencial",
        stock: 30,
        status: "ativo",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: {
          Material: "Poliéster multicamadas reforçado",
          Espessura: "4 mil (0,1mm)",
          "Redução de calor": "40%",
          "Bloqueio UV": "95%",
          "Visibilidade Luminosa": "80%",
          Garantia: "10 anos",
          Aplicação: "Profissional",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Película Fumê Escura",
        description:
          "Película fumê com tonalidade escura para máxima privacidade e redução de calor. Ideal para veículos em regiões de clima quente.",
        price: 179.99,
        category: "veicular",
        stock: 0,
        status: "esgotado",
        images: ["/placeholder.svg?height=600&width=600"],
        specifications: {
          Material: "Poliéster tingido de alta densidade",
          Espessura: "2 mil (0,05mm)",
          "Redução de calor": "65%",
          "Bloqueio UV": "99%",
          "Visibilidade Luminosa": "15%",
          Garantia: "5 anos",
          Aplicação: "Profissional",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    for (const product of productData) {
      await db.insert(products).values(product)
    }

    console.log("Sample products created")
    console.log("Database seeded successfully")
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error running seed script:", error)
    process.exit(1)
  })


// types/product.ts

export type ProductStatus = 'ACTIVE' | 'DEACTIVE' | 'DELETED'

export interface ProductDTO {
  id: string
  slug: string
  store: string
  status: ProductStatus
  title: string | null // Marcado como nullable no Swagger
  description: string | null // Marcado como nullable no Swagger
  value: number
  link: string
  where: string
  imageUrl: string | null // Marcado como nullable no Swagger
  created_at: string // ISO Date string
  updated_at: string | null // ISO Date string, nullable
  deleted_at: string | null // ISO Date string, nullable
}

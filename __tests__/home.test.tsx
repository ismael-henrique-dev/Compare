import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/platform/home/page'

// Mockando o Swiper (HomeBanner)
vi.mock('@/components/home/banner', () => ({
  HomeBanner: () => <div data-testid='banner-section'>Banner Section</div>,
}))

// Mockando o Carousel (ProductLists)
vi.mock('@/components/home/products', () => ({
  default: () => <div data-testid='products-section'>Products Section</div>,
  ProductLists: () => (
    <div data-testid='products-section'>Products Section</div>
  ),
}))

test('deve renderizar a home e suas seções principais', async () => {
  // 1. Resolve o Server Component
  const ResolvedHome = await Home()
  render(ResolvedHome)

  // 2. Verifica o Título "Lojas" (que é um Role 'heading')
  expect(screen.getByRole('heading', { name: /lojas/i })).toBeDefined()

  // 3. Verifica se os nossos Mocks foram renderizados via TestID
  expect(screen.getByTestId('banner-section')).toBeDefined()

  // 4. Verifica se pelo menos um link de loja está na tela
  // Isso garante que o componente <Stores /> não quebrou
  expect(screen.getByRole('link', { name: /logo terabyte/i })).toBeDefined()
})

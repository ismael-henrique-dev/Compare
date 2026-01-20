import { test, expect } from '@playwright/test';

test.describe('Página Principal - Compare Platform', () => {
  
  test.beforeEach(async ({ page }) => {
    // Acessa a home antes de cada teste
    await page.goto('/platform/home');
  });

  test('deve exibir todos os componentes principais', async ({ page }) => {
    // 1. Verifica se o Banner apareceu (mesmo sendo um Swiper complexo)
    // O Playwright espera o elemento carregar automaticamente
    const banner = page.locator('.swiper'); 
    await expect(banner).toBeVisible();

    // 2. Verifica a seção de Lojas
    await expect(page.getByRole('heading', { name: /lojas/i })).toBeVisible();
    
    // 3. Verifica se os carrosséis de produtos carregaram
    // Como você tem dois títulos iguais em seções diferentes, usamos o texto:
    await expect(page.getByText('Produtos vistos recentemente')).toBeVisible();
  });

  test('deve permitir a navegação entre os slides do produto', async ({ page }) => {
    // Encontra o botão de "próximo" do carrossel do Shadcn (CarouselNext)
    const nextButton = page.locator('button').filter({ hasText: '' }).nth(1); // Ou use um test-id se tiver
    
    await expect(nextButton).toBeVisible();
    await nextButton.click();
    
    // O Playwright é ótimo para testar se o clique não quebrou a página
  });

});
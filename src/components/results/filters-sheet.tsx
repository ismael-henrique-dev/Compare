import { Filter, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  BrandFilter,
  CategoryFilter,
  PriceRangeFilter,
  StoreFilter,
} from './filters'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'

export function FiltersSheet() {
  return (
    <Sheet>
      {/* Botão que abre o Filtro (baseado na sua imagem da esquerda) */}
      <SheetTrigger asChild>
        <Button variant='ghost' className='px-3 py-2 rounded-xl bg-white'>
          <IconAdjustmentsHorizontal className='h-5 w-5 text-brand' />
          Filtros
        </Button>
      </SheetTrigger>

      <SheetContent
        side='right'
        className='w-full sm:max-w-100 overflow-y-auto py-0 gap-0 bg-white'
      >
        <SheetHeader className='flex flex-row items-center justify-between bg-background px-3 py-4'>
          <SheetTitle className='text-xl font-semibold'>Filtros</SheetTitle>
          <SheetClose className='rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none cursor-pointer'>
            <X className='h-6 w-6' />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetHeader>
        <div className='px-5'>
          <Accordion
            type='multiple'
            defaultValue={['lojas', 'precos', 'categorias', 'marcas']}
            className='w-full space-y-1'
          >
            {/* Lojas */}
            <AccordionItem value='lojas' className='border-none'>
              <AccordionTrigger className='text-lg font-semibold hover:no-underline cursor-pointer'>
                Lojas
              </AccordionTrigger>
              <AccordionContent className='space-y-4'>
                <StoreFilter />
              </AccordionContent>
            </AccordionItem>

            {/* Preços */}
            <AccordionItem value='precos' className='border-none'>
              <AccordionTrigger className='text-lg font-semibold hover:no-underline cursor-pointer '>
                Preços
              </AccordionTrigger>
              <AccordionContent className='space-y-6 pt-2'>
                <PriceRangeFilter />
              </AccordionContent>
            </AccordionItem>

            {/* Categorias */}
            <AccordionItem value='categorias' className='border-none'>
              <AccordionTrigger className='text-lg font-semibold hover:no-underline cursor-pointer'>
                Categorias
              </AccordionTrigger>
              <AccordionContent className='space-y-4'>
                <CategoryFilter />
              </AccordionContent>
            </AccordionItem>

            {/* Marcas */}
            <AccordionItem value='marcas' className='border-none'>
              <AccordionTrigger className='text-lg font-semibold hover:no-underline cursor-pointer'>
                Marcas
              </AccordionTrigger>
              <AccordionContent className='space-y-4'>
                <BrandFilter />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}

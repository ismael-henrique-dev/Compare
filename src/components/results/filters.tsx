'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useDebouncedCallback } from 'use-debounce'

export function PriceRangeFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const maxPriceFormatedToNumber = Number(searchParams.get('maxPrice')) || 10000

  const minPriceFormatedToNumber = Number(searchParams.get('minPrice')) || 0

  const [range, setRange] = useState([
    minPriceFormatedToNumber,
    maxPriceFormatedToNumber,
  ])

  const handleUpdateUrl = useDebouncedCallback((key: string, term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(key, term)
    } else {
      params.delete(key)
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 500)

  const updatePriceParams = useDebouncedCallback((min: number, max: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('minPrice', min.toString())
    params.set('maxPrice', max.toString())

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 500)

  const handleSliderChange = (values: number[]) => {
    setRange(values)
    updatePriceParams(values[0], values[1])
  }

  return (
    <div className='space-y-6 pt-2'>
      <div className='flex justify-between text-sm font-medium'>
        <span className='text-slate-500 font-semibold'>Intervalo de preço</span>
        <span className='text-slate-500 font-bold'>
          R$ {range[0]} - R$ {range[1]}
        </span>
      </div>

      {/* Slider usa Limits como bordas e Range como ponteiros */}
      <Slider
        min={Number(searchParams.get('minLimit')?.toString()) || 100}
        max={Number(searchParams.get('maxLimit')?.toString()) || 1000}
        step={1}
        defaultValue={[minPriceFormatedToNumber, maxPriceFormatedToNumber]}
        onValueChange={handleSliderChange}
        className='py-4'
      />

      <div className='grid grid-cols-2 gap-4'>
        {/* INPUT MÍNIMO: Controla o minPrice e o minLimit na URL */}
        <div className='space-y-2'>
          <Label className='text-[10px] font-bold uppercase text-slate-900'>
            Mínimo
          </Label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold'>
              R$
            </span>
            <Input
              type='number'
              onChange={(e) => {
                handleUpdateUrl('minLimit', e.target.value)
              }}
              defaultValue={searchParams.get('minLimit')?.toString() || 0}
              className='pl-9 h-11 bg-slate-50/50 border-slate-200 rounded-xl'
            />
          </div>
        </div>

        {/* INPUT MÁXIMO: Controla o maxPrice e o maxLimit na URL */}
        <div className='space-y-2'>
          <Label className='text-[10px] font-bold uppercase text-slate-900'>
            Máximo
          </Label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold'>
              R$
            </span>
            <Input
              type='number'
              onChange={(e) => {
                handleUpdateUrl('maxLimit', e.target.value)
              }}
              defaultValue={searchParams.get('maxLimit')?.toString() || 10000}
              className='pl-9 h-11 bg-slate-50/50 border-slate-200 rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const stores = ['AliExpress', 'Terabyte', 'Kabum', 'Pichau']

export function StoreFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const selectedStores = searchParams.getAll('store')

  const updateStoreParams = (newSelectedStores: string[]) => {
    const params = new URLSearchParams(searchParams)

    params.delete('store')

    newSelectedStores.forEach((store) => {
      params.append('store', store)
    })

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleCheckboxChange = (store: string, checked: boolean) => {
    let newSelection = [...selectedStores]

    if (checked) {
      newSelection.push(store)
    } else {
      newSelection = newSelection.filter((s) => s !== store)
    }

    updateStoreParams(newSelection)
  }

  return (
    <div className='flex flex-col gap-3'>
      {stores.map((store) => (
        <div key={store} className='flex items-center space-x-3'>
          <Checkbox
            id={store}
            checked={selectedStores.includes(store)}
            onCheckedChange={(checked) =>
              handleCheckboxChange(store, !!checked)
            }
            className='h-5 w-5 border-gray-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 cursor-pointer'
          />
          <Label htmlFor={store} className='cursor-pointer'>
            {store}
          </Label>
        </div>
      ))}
    </div>
  )
}

const brands = ['Gigabyte', 'Asus', 'AsRock', 'AMD', 'Intel']

export function BrandFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const selectedBrands = searchParams.getAll('brand')

  const updateStoreParams = (newSelectedBrands: string[]) => {
    const params = new URLSearchParams(searchParams)

    params.delete('brand')

    newSelectedBrands.forEach((store) => {
      params.append('brand', store)
    })

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleCheckboxChange = (brand: string, checked: boolean) => {
    let newSelection = [...selectedBrands]

    if (checked) {
      newSelection.push(brand)
    } else {
      newSelection = newSelection.filter((b) => b !== brand)
    }

    updateStoreParams(newSelection)
  }

  return (
    <div className='flex flex-col gap-3'>
      {brands.map((brand) => (
        <div key={brand} className='flex items-center space-x-3'>
          <Checkbox
            id={brand}
            checked={selectedBrands.includes(brand)}
            onCheckedChange={(checked) =>
              handleCheckboxChange(brand, !!checked)
            }
            className='h-5 w-5 border-gray-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 cursor-pointer'
          />
          <Label htmlFor={brand} className='cursor-pointer'>
            {brand}
          </Label>
        </div>
      ))}
    </div>
  )
}

const categories = [
  'Processador',
  'Placa de vídeo',
  'Fonte',
  'Placa mãe',
  'Cooler',
  'Armazenamento',
  'Memória RAM',
]

export function CategoryFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const selectedCategories = searchParams.getAll('category')

  const updateStoreParams = (newSelectedBrands: string[]) => {
    const params = new URLSearchParams(searchParams)

    params.delete('category')

    newSelectedBrands.forEach((store) => {
      params.append('category', store)
    })

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleCheckboxChange = (category: string, checked: boolean) => {
    let newSelection = [...selectedCategories]

    if (checked) {
      newSelection.push(category)
    } else {
      newSelection = newSelection.filter((b) => b !== category)
    }

    updateStoreParams(newSelection)
  }

  return (
    <div className='flex flex-col gap-3'>
      {categories.map((category) => (
        <div key={category} className='flex items-center space-x-3'>
          <Checkbox
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={(checked) =>
              handleCheckboxChange(category, !!checked)
            }
            className='h-5 w-5 border-gray-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 cursor-pointer'
          />
          <Label htmlFor={category} className='cursor-pointer'>
            {category}
          </Label>
        </div>
      ))}
    </div>
  )
}

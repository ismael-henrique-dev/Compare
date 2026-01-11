'use client'

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

interface DialogAlertPriceProps {
  title: string
  description?: string
  MinPrice?: string
  MaxPrice?: string
}

export default function DialogAlertPrice({
  title,
  description,
  MinPrice,
  MaxPrice,
}: DialogAlertPriceProps) {
  const [maxPrice, setMaxPrice] = useState<string>(MaxPrice ? MaxPrice : '')
  const [minPrice, setMinPrice] = useState<string>(MinPrice ? MinPrice : '')

  return (
    <DialogContent className='sm:max-w-105 pr-8 pl-8 gap-0 bg-white'>
      <DialogHeader className='mb-4'>
        <DialogTitle className='font-semibold text-xl'>{title}</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col gap-5'>
        <DialogDescription className='text-sm text-[#52525B]'>
          {description}
        </DialogDescription>
        <div className='flex flex-row gap-3'>
          <div className='w-full'>
            <label className='text-sm font-medium'>Preço mínimo</label>
            <Input
              placeholder={minPrice}
              value={minPrice}
              className='bg-white border-[#E2E8F0]'
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>

          <div className='w-full'>
            <label className='text-sm font-medium'>Preço máximo</label>
            <Input
              placeholder={maxPrice}
              value={maxPrice}
              className='bg-white border-[#E2E8F0]'
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button className='bg-[#1B7E2F] hover:bg-[#166528] border-0 mt-5 w-full rounded-3xl'>
        Confirmar
      </Button>
    </DialogContent>
  )
}

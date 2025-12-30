'use client'

import { SearchIcon } from 'lucide-react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function Search({
  placeholder,
  paramName = 'query',
}: {
  placeholder: string
  paramName?: string
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)

    // params.set('page', '1')
    if (term) {
      params.set(paramName, term)
    } else {
      params.delete(paramName)
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className='relative flex shrink-0 bg-white rounded-4xl px-4 py-2 lg:w-96'>
      <input
        className='block w-full py-[9px]text-sm outline-none placeholder:text-brand'
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get(paramName)?.toString()}
      />

      <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 text-brand' />
    </div>
  )
}

'use client'

import { SearchIcon } from 'lucide-react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function SearchBar({
  placeholder,
  paramName = 'query',
}: {
  placeholder: string
  paramName?: string
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace, push } = useRouter()

  const handleType = useDebouncedCallback((term) => {
    console.log(`Typing... ${term}`)

    const params = new URLSearchParams(searchParams)

    // params.set('page', '1')
    if (term) {
      params.set(paramName, term)
    } else {
      params.delete(paramName)
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const term = formData.get('search') || ''

    console.log('Search: ' + term)

    if (term) {
      // Corrigido: /platform/ e usando push/replace em vez de redirect
      push(`/platform/results?${paramName}=${encodeURIComponent(term as string)}`)
    }
  }

  return (
    <form
      onSubmit={onSearch}
      className='relative flex shrink-0 bg-white rounded-4xl px-4 py-2 lg:w-96'
    >
      <input
        className='block w-full py-[9px]text-sm outline-none placeholder:text-brand'
        placeholder={placeholder}
        name='search'
        onChange={(e) => {
          handleType(e.target.value)
        }}
        defaultValue={searchParams.get(paramName)?.toString()}
      />

      <button type='submit'>
        <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 text-brand' />
      </button>
    </form>
  )
}

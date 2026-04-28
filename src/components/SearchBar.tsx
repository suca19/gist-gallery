import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search gists...',
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="relative flex-1 max-w-md">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B949E]" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-[#0D1117] border border-[#30363D] rounded px-4 py-2 pl-10 text-[#C9D1D9] placeholder-[#8B949E] focus:outline-none focus:border-[#58A6FF] transition"
      />
    </div>
  )
}

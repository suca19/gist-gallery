import { useEffect, useState } from 'react'
import Card from '../components/Card'
import CategoryTabs from '../components/CategoryTabs'
import SearchBar from '../components/SearchBar'
import { motion } from 'motion/react'
import type { Gist } from '../types/gist'
import { fetchGists } from '../services/gistServices'

const CATEGORIES = ['Leetcode', 'MySQL', 'Status Code', 'OOP', 'Linux', 'Docker']

function categorizeGist(gist: Gist): string[] {
  const text = `${gist.description || ''} ${Object.keys(gist.files).join(' ')}`.toLowerCase()
  return CATEGORIES.filter((cat) => text.includes(cat.toLowerCase()))
}

export default function Home() {
  const [gists, setGists] = useState<Gist[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    fetchGists()
      .then(setGists)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filteredGists = gists.filter((gist) => {
    const matchesSearch =
      !searchQuery ||
      gist.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Object.keys(gist.files).some((filename) =>
        filename.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const gistCategories = categorizeGist(gist)
    const matchesCategory = !selectedCategory || gistCategories.includes(selectedCategory)

    return matchesSearch && matchesCategory
  })

  if (loading) return <div className="text-center py-12">Loading gists...</div>

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      <CategoryTabs
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {filteredGists.map((gist) => (
          <Card key={gist.id} gist={gist} />
        ))}
      </motion.div>
      {filteredGists.length === 0 && (
        <div className="text-center py-12 text-[#8B949E]">
          No gists found matching your criteria.
        </div>
      )}
    </>
  )
}

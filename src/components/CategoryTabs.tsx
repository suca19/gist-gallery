interface CategoryTabsProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded transition-all ${
          selectedCategory === null
            ? 'bg-[#58A6FF] text-[#0D1117] font-semibold'
            : 'bg-[#161B22] text-[#C9D1D9] border border-[#30363D] hover:border-[#58A6FF]'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded transition-all ${
            selectedCategory === category
              ? 'bg-[#58A6FF] text-[#0D1117] font-semibold'
              : 'bg-[#161B22] text-[#C9D1D9] border border-[#30363D] hover:border-[#58A6FF]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

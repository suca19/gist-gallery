import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#8B949E] mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link to={item.href} className="text-[#58A6FF] hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#C9D1D9]">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <FaChevronRight className="w-3 h-3" />
          )}
        </div>
      ))}
    </nav>
  )
}

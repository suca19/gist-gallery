import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'motion/react'
import type { Gist } from '../types/gist'

export default function Card({ gist }: { gist: Gist }) {
  const firstFileName = Object.keys(gist.files)[0] || 'No files'
  const description = gist.description || 'Untitled Gist'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-5 hover:border-[#58A6FF] transition-all">
        <Link to={`/gist/${gist.id}`} className="block mb-4">
          <h3 className="font-semibold text-lg line-clamp-2 hover:text-[#58A6FF] transition">
            {description}
          </h3>
        </Link>
        <p className="text-[#8B949E] text-sm mb-4">{firstFileName}</p>
        <div className="flex gap-3">
          <Link
            to={`/gist/${gist.id}`}
            className="text-[#58A6FF] text-sm hover:underline flex-1"
          >
            View Details
          </Link>
          <a
            href={gist.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B949E] hover:text-[#58A6FF] transition"
            title="View on GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}


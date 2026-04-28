import type { Gist } from '../types/gist';

export default function Card({ gist }: { gist: Gist }) {
  const firstFileName = Object.keys(gist.files)[0] || 'No files'
  const description = gist.description || 'Untitled Gist'

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-5 hover:border-[#58A6FF] transition-all hover:scale-[1.02]">
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{description}</h3>
      <p className="text-[#8B949E] text-sm mb-3">{firstFileName}</p>
      <a
        href={gist.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#58A6FF] text-sm hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  )
}


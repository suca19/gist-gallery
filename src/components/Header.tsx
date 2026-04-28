import { FaGithub } from 'react-icons/fa';

export default function Header() {
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'github';
  return (
    <header className="border-b border-[#30363D] bg-[#161B22] px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">📚 Gist Library</h1>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B949E] hover:text-[#58A6FF] transition"
        >
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </header>
  )
}
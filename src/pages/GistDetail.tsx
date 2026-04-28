import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import CodeRenderer from '../components/CodeRenderer'
import Breadcrumb from '../components/Breadcrumb'
import type { Gist } from '../types/gist'

export default function GistDetail() {
  const { gistId } = useParams<{ gistId: string }>()
  const navigate = useNavigate()
  const [gist, setGist] = useState<Gist | null>(null)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!gistId) return

    const fetchGistDetail = async () => {
      try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`)
        if (!response.ok) throw new Error('Failed to fetch gist details')
        const data = await response.json()
        setGist(data)
        // Set first file as selected
        const firstFile = Object.keys(data.files)[0]
        setSelectedFile(firstFile || null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchGistDetail()
  }, [gistId])

  if (loading) return <div className="py-12 text-center">Loading...</div>
  if (error) return <div className="py-12 text-center text-[#F85149]">Error: {error}</div>
  if (!gist) return <div className="py-12 text-center">Gist not found</div>

  const files = Object.entries(gist.files)
  const currentFile = selectedFile ? gist.files[selectedFile] : null

  const isMarkdown =
    currentFile?.filename.endsWith('.md') ||
    currentFile?.language === 'Markdown'

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: gist?.description || 'Gist', href: `/gist/${gistId}` },
          { label: selectedFile || 'File' },
        ]}
      />
      <div className="flex flex-col lg:flex-row gap-6">
        {/* File Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
        <h2 className="text-lg font-semibold mb-4 text-[#C9D1D9]">Files</h2>
        <div className="space-y-2">
          {files.map(([fileName, file]) => (
            <button
              key={fileName}
              onClick={() => setSelectedFile(fileName)}
              className={`w-full text-left px-4 py-3 rounded transition-all ${
                selectedFile === fileName
                  ? 'bg-[#58A6FF] text-[#0D1117] font-semibold'
                  : 'bg-[#161B22] text-[#C9D1D9] border border-[#30363D] hover:border-[#58A6FF]'
              }`}
            >
              <div className="truncate">{fileName}</div>
              {file.language && (
                <div className="text-xs opacity-70 mt-1">{file.language}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold mb-2">
          {gist.description || 'Untitled Gist'}
        </h1>
        <div className="text-sm text-[#8B949E] mb-6">
          <a
            href={gist.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58A6FF] hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {currentFile && (
          <>
            {isMarkdown ? (
              <MarkdownRenderer
                content={currentFile.content}
                filename={currentFile.filename}
              />
            ) : (
              <CodeRenderer
                content={currentFile.content}
                filename={currentFile.filename}
                language={currentFile.language}
              />
            )}
          </>
        )}

        <button
          onClick={() => navigate('/')}
          className="mt-8 px-4 py-2 bg-[#161B22] border border-[#30363D] rounded hover:border-[#58A6FF] text-[#58A6FF] transition"
        >
          ← Back to Gists
        </button>
      </div>
    </div>
    </div>
  )
}

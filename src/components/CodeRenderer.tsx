import hljs from 'highlight.js'
import { useMemo } from 'react'

interface CodeRendererProps {
  content: string
  filename: string
  language?: string | null
}

export default function CodeRenderer({
  content,
  filename,
  language,
}: CodeRendererProps) {
  const highlightedCode = useMemo(() => {
    if (!language) {
      return hljs.highlightAuto(content).value
    }
    try {
      return hljs.highlight(content, { language }).value
    } catch {
      return hljs.highlightAuto(content).value
    }
  }, [content, language])

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-6 max-w-full overflow-hidden">
      <h3 className="font-mono text-sm mb-4 text-[#58A6FF]">
        {filename}
        {language && <span className="text-[#8B949E] ml-2">• {language}</span>}
      </h3>
      <pre className="bg-[#0D1117] p-4 rounded overflow-auto max-w-full">
        <code
          className="hljs block min-w-max"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  )
}

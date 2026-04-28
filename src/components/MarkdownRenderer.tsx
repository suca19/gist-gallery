import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MarkdownRendererProps {
  content: string
  filename: string
}

export default function MarkdownRenderer({
  content,
  filename,
}: MarkdownRendererProps) {
  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-6 max-w-full min-w-0 overflow-x-auto">
      <h3 className="font-mono text-sm mb-4 text-[#58A6FF]">{filename}</h3>
      <div className="prose prose-invert max-w-none min-w-0 break-words">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-2xl font-bold text-[#C9D1D9] mt-6 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-xl font-bold text-[#C9D1D9] mt-6 mb-4" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-lg font-bold text-[#C9D1D9] mt-4 mb-3" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-[#C9D1D9] mb-4 leading-relaxed" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-[#58A6FF] hover:underline" {...props} />
            ),
            code: ({ node, inline, className, children, ...props }: any) =>
              inline ? (
                <code className="bg-[#0D1117] text-[#79C0FF] px-2 py-1 rounded text-sm break-words" {...props}>
                  {children}
                </code>
              ) : (
                <code className="text-[#C9D1D9] block min-w-max" {...props}>
                  {children}
                </code>
              ),
            pre: ({ node, ...props }) => (
              <pre className="bg-[#0D1117] p-4 rounded overflow-auto mb-4 border border-[#30363D] max-w-full" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside text-[#C9D1D9] mb-4" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside text-[#C9D1D9] mb-4" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="mb-2" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-[#58A6FF] pl-4 italic text-[#8B949E] my-4" {...props} />
            ),
            table: ({ node, ...props }) => (
              <table className="w-full border-collapse border border-[#30363D] my-4 block overflow-x-auto" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="border border-[#30363D] px-4 py-2 bg-[#0D1117] text-[#58A6FF]" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="border border-[#30363D] px-4 py-2 text-[#C9D1D9]" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

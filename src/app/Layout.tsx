import Header from '../components/Header'

export default function Layout({ children}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9]">
      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {children}
      </main>
    </div>
  )
}
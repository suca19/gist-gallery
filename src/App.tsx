import Layout from './app/Layout'
import Card  from './components/Card'
import { useEffect, useState } from 'react'
import type { Gist } from './types/gist'
import { fetchGists} from './services/gistServices'


function App() {
  const [gists, setGists] = useState<Gist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGists()
    .then(setGists)
    .catch(console.error)
    .finally(() => setLoading(false))
    
  }, [])

  if (loading) return <Layout><div>Loading...</div></Layout>
  return (
    <Layout>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {gists.map(gist => (
    <Card key={gist.id} gist={gist} />
  ))}
</div>
    </Layout>
  )
}

export default App;
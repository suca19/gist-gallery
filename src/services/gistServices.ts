import type { Gist } from '../types/gist';

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'github';

export async function fetchGists(): Promise<Gist[]>{
    const response = await fetch(`https://api.github.com/users/${USERNAME}/gists`)
    if (!response.ok) throw new Error('Failed to fetch gists')
    return response.json()
}
import type { Gist } from '../types/gist';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USERNAME;

export async function fetchGists(): Promise<Gist[]>{
    const response = await fetch(`https://api.github.com/users/${USERNAME}/gists`)
    if (!response.ok) throw new Error('Failed to fetch gists')
    return response.json()
}
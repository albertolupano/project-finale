import { Post } from '../types/Post'

export async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Errore nel recupero dei post')
  }

  return res.json()
}

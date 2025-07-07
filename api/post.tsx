import { Post } from '../types/Post'

export async function createPost(postData: Omit<Post, 'id'>): Promise<Post> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })

  if (!res.ok) throw new Error('Errore nella creazione del post')
  return res.json()
}

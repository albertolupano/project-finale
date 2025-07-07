import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../api/posts'
import { Post } from '../types/Post'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const newPost: Omit<Post, 'id'> = { title, body, userId: 1 }
      const created = await createPost(newPost)
      navigate(`/posts/${created.id}`) // simula redirect al dettaglio
    } catch (err: any) {
      setError(err.message || 'Errore generico')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h2>Crea un nuovo post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titolo</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Contenuto</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Invio in corso...' : 'Invia'}
        </button>
      </form>
    </>
  )
}
import { useNavigate } from 'react-router-dom'
import useApi from '../hooks/useApi'
import { getPosts } from '../api/posts'
import { Post } from '../types/Post'

export default function Posts() {
  const { data: posts, loading, error } = useApi<Post[]>(getPosts)
  const navigate = useNavigate()

  if (loading) return <p>Caricamento in corso...</p>
  if (error) return <p>Errore: {error}</p>
  if (!posts) return null

  return (
    <>
      <h2>Lista Post</h2>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}
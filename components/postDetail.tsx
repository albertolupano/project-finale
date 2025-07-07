import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi'
import { getPostById } from '../api/posts'
import { Post } from '../types/Post'

export default function PostDetail() {
  const { id } = useParams<{ id: string }>()
  const postId = Number(id)

  const { data: post, loading, error } = useApi<Post>(() => getPostById(postId))

  if (loading) return <p>Caricamento in corso...</p>
  if (error) return <p>Errore: {error}</p>
  if (!post) return null

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'

<Routes>
  <Route path="/posts" element={<Posts />} />
  <Route path="/posts/:id" element={<PostDetail />} />
</Routes>

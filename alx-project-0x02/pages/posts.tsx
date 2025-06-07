import { useEffect, useState } from 'react'
import PostCard from '@/components/common/PostCard'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Failed to fetch posts:', error))
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </main>
  )
}


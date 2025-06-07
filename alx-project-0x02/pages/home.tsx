import { useState } from 'react'
import Header from '@/components/layout/Header'
import PostModal from '@/components/common/PostModal'

interface Post {
  title: string
  content: string
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [post, ...prevPosts])
  }

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <div className="mt-6 space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

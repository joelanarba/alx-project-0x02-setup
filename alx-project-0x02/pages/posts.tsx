import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

interface PostsPageProps {
  posts: PostProps[]
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const data = await res.json()

  // Map API data to PostProps format
  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }))

  return {
    props: {
      posts,
    },
  }
}

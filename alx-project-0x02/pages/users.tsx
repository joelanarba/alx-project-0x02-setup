

import { UserProps } from '@/interfaces'
import UserCard from '@/components/common/UserCard'

interface UsersPageProps {
  users: UserProps[]
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: UserProps[] = await res.json()

  return {
    props: {
      users,
    },
  }
}

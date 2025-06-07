import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow flex justify-between items-center">
      <h2 className="text-2xl font-semibold">ALX Project Header</h2>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:underline">
                Users
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

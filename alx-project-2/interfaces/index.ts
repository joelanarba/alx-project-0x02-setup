// interfaces/index.ts

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

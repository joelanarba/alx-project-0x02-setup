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

export interface ButtonProps {
  text: string
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  onClick?: () => void
  className?: string
}

export interface PostProps {
  title: string
  content: string
  userId: number
}

// interfaces/index.ts

export interface UserProps {
  id: number
  name: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}


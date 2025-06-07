import { UserProps } from '@/interfaces'

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-sm text-gray-700 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  )
}
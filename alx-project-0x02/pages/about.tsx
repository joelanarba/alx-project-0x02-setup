import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <div className="flex flex-col gap-4">
          <Button text="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button text="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button text="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  )
}

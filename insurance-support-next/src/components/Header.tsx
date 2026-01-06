import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Insurance Support
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/support" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/work', label: 'Work' },
  ]

  return (
    <header className="sticky top-0 z-20 bg-gray-900/95 border-b border-gray-700">
      <nav className="p-6 flex items-center justify-between font-mono">
        <Link href="/" className="text-white font-medium no-underline hover:underline">
          Jonathan Hsu
        </Link>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-white no-underline hover:underline"
              >
                [{item.label}]
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation

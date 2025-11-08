'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/work', label: 'Work' },
  ]

  return (
    <header className="sticky top-0 z-20 bg-white/95 dark:bg-gray-900/95 border-b border-gray-300 dark:border-gray-700">
      <nav className="p-6 flex items-center justify-between font-mono">
        <Link href="/" className="text-gray-900 dark:text-white font-medium no-underline hover:underline">
          Jonathan Hsu
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-900 dark:text-white no-underline hover:underline"
                >
                  [{item.label}]
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navigation

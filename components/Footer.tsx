import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-700">
      <div className="p-6 text-sm flex items-center justify-between font-mono">
        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com/in/jonathanhsu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            [LinkedIn]
          </Link>
          <Link
            href="https://github.com/jonathanhsu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            [GitHub]
          </Link>
          <Link
            href="mailto:jonhsu97@gmail.com"
            className="text-white no-underline hover:underline"
          >
            [Email]
          </Link>
        </div>
        <p className="text-gray-400">© {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer

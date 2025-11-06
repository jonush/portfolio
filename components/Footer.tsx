import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-700">
      <div className="p-6 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
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
          <Link
            href="/jonathan_hsu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            [Resume]
          </Link>
        </div>
        <p className="text-gray-400">© {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer

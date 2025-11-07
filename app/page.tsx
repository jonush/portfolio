import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='border-b border-gray-700'>
        <div className='p-6 space-y-6'>
          <h2 className='text-xl font-mono text-gray-400'>About</h2>

          <div className='space-y-4 text-gray-300'>
            <p>
              I&apos;m Jon, a product designer with over 4 years of experience
              creating user-centered solutions for enterprise and SMB customers.
            </p>

            <p>
              I enjoy building design systems, solving complex UX challenges,
              and exploring nonstandard user interface patterns.
            </p>

            <p>Currently looking for my next role :)</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className='border-b border-gray-700'>
        <div className='p-6'>
          <h2 className='text-xl font-mono mb-6 text-gray-400'>Work</h2>

          <p className='text-gray-300 mb-4'>
            I previously led design at Cyral, where as the first design hire, I
            established design processes and systems that drove significant
            business impact—including features that generated $750k+ in new
            business.
          </p>

          <Link href='/work' className='text-white'>
            View my work→
          </Link>
        </div>
      </section>
    </>
  );
}

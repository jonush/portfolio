import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      slug: 'data-access-portal',
      title: 'Cyral Data Access Portal',
      description:
        'Designed a unified interface for managing database connections with passwordless authentication, reducing security incidents by 85%.',
    },
    {
      slug: 'design-system',
      title: 'Cyral Design Style Guide',
      description:
        'Established a comprehensive design system that improved engineering velocity while producing consistent user experiences across our enterprise security platform.',
    },
  ];

  return (
    <>
      <section>
        <div className='p-6 space-y-6'>
          <h2 className='text-xl font-mono text-gray-600 dark:text-gray-400'>Work</h2>

          <p className='text-gray-700 dark:text-gray-300'>
            During my time as Cyral&apos;s first design hire, these projects
            shaped both the product&apos;s evolution and my growth as a designer
            navigating the unique challenges of enterprise security.
          </p>

          <div className='space-y-6'>
            {projects.map((project) => (
              <article
                key={project.slug}
                className='border border-gray-300 dark:border-gray-700 p-6'
              >
                <h3 className='font-medium text-gray-900 dark:text-white mb-3'>{project.title}</h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>{project.description}</p>
                <Link href={`/work/${project.slug}`}>
                  View →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer to push footer down */}
      <div className='flex-1'></div>
    </>
  );
}

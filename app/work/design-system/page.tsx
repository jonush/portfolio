export default function DesignSystem() {
  return (
    <>
      <section>
        <div className='p-6 space-y-6'>
          <header>
            <h2 className='text-xl font-semibold text-white mb-2'>
              Cyral Design Style Guide
            </h2>
            <div className='flex gap-4 text-sm text-gray-400'>
              <span>Lead Product Designer</span>
              <span>•</span>
              <span>2021-2024</span>
            </div>
          </header>

          <div className='space-y-6'>
            <section>
              <h3 className='text-base font-medium text-white mb-3'>Overview</h3>
              <p className='text-gray-300'>
                Established a comprehensive design system that dramatically improved engineering velocity while creating consistent user experiences across our enterprise security platform.
              </p>
            </section>

            <section>
              <h3 className='text-base font-medium text-white mb-3'>Impact</h3>
              <ul className='space-y-2'>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Improved engineering velocity by 40% with reusable components</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Created 50+ documented components with usage guidelines</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Reduced design-to-development handoff time by 60%</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Enabled consistent UX across 15+ product features</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className='text-base font-medium text-white mb-3'>Challenge</h3>
              <p className='text-gray-300'>
                Building a scalable design system from scratch while supporting active product development and maintaining design quality.
              </p>
            </section>

            <section>
              <h3 className='text-base font-medium text-white mb-3'>Solution</h3>
              <p className='text-gray-300'>
                Started with core components based on actual product needs, created comprehensive documentation with code examples, and established a governance model for system updates and contributions.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Spacer to push footer down */}
      <div className='flex-1'></div>
    </>
  )
}

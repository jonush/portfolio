export default function DataAccessPortal() {
  return (
    <>
      <section>
        <div className='p-6 space-y-6'>
          <header>
            <h2 className='text-xl font-semibold text-white mb-2'>
              Cyral Data Access Portal
            </h2>
            <div className='flex gap-4 text-sm text-gray-400 font-mono'>
              <span>Lead Product Designer</span>
              <span>•</span>
              <span>2021-2024</span>
            </div>
          </header>

          <div className='space-y-6'>
            <section>
              <h3 className='text-base font-medium text-white mb-3'>Overview</h3>
              <p className='text-gray-300'>
                Designed a unified interface for managing database connections with passwordless authentication, reducing security incidents by 85%.
              </p>
            </section>

            <section>
              <h3 className='text-base font-medium text-white mb-3'>Impact</h3>
              <ul className='space-y-2'>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Reduced security incidents by 85% through passwordless authentication design</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Established comprehensive design system as first design hire</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Improved engineering velocity by 40% with reusable components</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-gray-500 mr-3'>•</span>
                  <span>Designed features that drove $750k+ in new business</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className='text-base font-medium text-white mb-3'>Challenge</h3>
              <p className='text-gray-300'>
                Creating intuitive interfaces for complex security workflows while maintaining enterprise-grade security standards.
              </p>
            </section>

            <section>
              <h3 className='text-base font-medium text-white mb-3'>Solution</h3>
              <p className='text-gray-300'>
                Developed a modular design system that balanced security requirements with user experience, using progressive disclosure for complex features and clear visual hierarchies to guide users through multi-step workflows.
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

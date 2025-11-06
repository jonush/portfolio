import Image from 'next/image';

export default function DataAccessPortal() {
  return (
    <>
      <section>
        <div className='p-6 space-y-6'>
          <header className='space-y-4'>
            <div>
              <h1 className='text-2xl font-semibold text-white'>
                Cyral Data Access Portal
              </h1>
              <p className='text-lg text-gray-300'>
                Streamlining and securing database access for enterprise
                security
              </p>
            </div>

            {/* Cover Image */}
            <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
              <Image
                src='/cyral-logo.png'
                alt='Cyral Data Access Portal'
                width={1200}
                height={600}
                className='w-full h-auto'
              />
            </div>

            {/* Project Details */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
              <div>
                <span className='text-gray-400 block mb-2'>Duration</span>
                <span className='text-gray-300'>3 months</span>
              </div>
              <div>
                <span className='text-gray-400 block mb-2'>Platform</span>
                <span className='text-gray-300'>Web Application</span>
              </div>

              <div>
                <span className='text-gray-400 block text-sm mb-2'>Team</span>
                <p className='text-gray-300 text-sm'>
                  Lead Designer (me), Head of Engineering, Chief Software
                  Architect, 2 Front-end Developers, Product Manager
                </p>
              </div>
            </div>
          </header>

          {/* Content Sections */}
          <div className='space-y-8'>
            {/* Overview */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Overview</h2>
              <p className='text-gray-300 leading-relaxed'>
                Database security breaches cost organizations an average of
                $4.35M per incident. Our enterprise customers (Informatica,
                Verisk, Vanguard) were struggling with password management
                across hundreds of databases, creating both security
                vulnerabilities and operational friction. As the first design
                hire at Cyral, I was tasked with solving a critical problem: how
                do we create a password-less database access solution that
                maintains enterprise security while dramatically improving user
                experience?
              </p>
              <p className='text-gray-300 leading-relaxed'>
                <span className='text-white font-medium'>My Role:</span> I led
                the entire design process, from user research to final
                implementation, working as the primary design voice on a
                cross-functional team.
              </p>
            </section>

            {/* Challenges */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Challenges</h2>
              <ul className='space-y-4'>
                <li>
                  <h3 className='text-white font-medium'>
                    1. Security Vulnerabilities
                  </h3>
                  <p className='text-gray-300'>
                    Organizations struggled with password-based database access,
                    leading to security incidents and compliance challenges in
                    enterprise environments.
                  </p>
                </li>
                <li>
                  <h3 className='text-white font-medium'>2. User Friction</h3>
                  <p className='text-gray-300'>
                    Users had to manage multiple passwords and complex
                    connection strings, with 65% reporting that existing
                    database access methods were cumbersome and time-consuming.
                  </p>
                </li>
              </ul>
            </section>

            {/* Research */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Research & Approach</h2>
              <div className='space-y-6'>
                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    User Research Approach:
                  </span>{' '}
                  I conducted 15+ customer interviews across enterprise and SMB
                  segments, partnering with our sales and support teams to
                  understand real-world pain points. I also analyzed support
                  tickets to identify the most common failure points in existing
                  workflows.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Cross-functional Collaboration:
                  </span>{' '}
                  Rather than working in isolation, I embedded myself with
                  engineering from day one. I facilitated weekly
                  design-engineering sync meetings and created shared Figma
                  files where engineers could inspect designs and leave
                  feedback. This collaborative approach helped us identify
                  technical constraints early and find creative solutions
                  together.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Design Standards:
                  </span>{' '}
                  I established design guidelines specifically for this project,
                  creating reusable components for data tables, connection
                  forms, and security indicators that could scale across
                  Cyral&apos;s product suite.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Stakeholder Management:
                  </span>{' '}
                  I presented design decisions to executives using business
                  metrics and security compliance requirements, translating user
                  needs into language that resonated with C-level stakeholders
                  focused on ROI and risk mitigation.
                </p>
              </div>
            </section>

            {/* Solutions */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Solutions</h2>
              <div className='space-y-4'>
                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Centralized Access Management
                  </h3>

                  <p className='text-gray-300'>
                    A unified interface for managing database connections that
                    simplifies how users search for repositories, manage access
                    tokens, and request access. The portal provides paginated
                    database listings with enhanced search and filter
                    capabilities, as research showed organizations manage
                    databases numbering from the dozens to hundreds.
                  </p>

                  {/* Image */}
                  <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
                    <Image
                      src='/data-access-portal.png'
                      alt='Centralized Access Management'
                      width={1200}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>

                  <p className='text-gray-300'>
                    I chose a card-based layout over traditional tables after
                    observing users needed to quickly scan database types,
                    access levels, and security restrictions simultaneously.
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Password-less Authentication
                  </h3>

                  <p className='text-gray-300'>
                    Implemented token-based authentication that eliminates the
                    need for passwords, enhancing security and simplifying the
                    connection process. Users primarily utilize connection
                    strings containing necessary values for database connection,
                    with legacy password support maintained for specific
                    scenarios.
                  </p>

                  {/* Image */}
                  <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
                    <Image
                      src='/data-access-portal-details.png'
                      alt='Password-less Authentication'
                      width={1200}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>

                  <p className='text-gray-300'>
                    Working closely with our Chief Software Architect, I
                    designed the authentication flow to integrate seamlessly
                    with existing identity providers while maintaining a simple
                    user experience.
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Enhanced Security Integration
                  </h3>

                  <p className='text-gray-300'>
                    The portal displays security restrictions (e.g., access only
                    when on-call) and integrates with SSO and MFA systems. Users
                    can authenticate using identity providers when necessary,
                    ensuring compliance with enterprise security policies.
                  </p>

                  {/* Image */}
                  <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
                    <Image
                      src='/data-access-portal-duo-mfa.png'
                      alt='Enhanced Security Integration'
                      width={1200}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>

                  <p className='text-gray-300'>
                    I developed an unexpected solution for security policy
                    visualization—using color-coded indicators and progressive
                    disclosure to show complex access rules without overwhelming
                    the interface.
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Results</h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='border border-gray-700 p-6'>
                  <div className='text-4xl font-bold text-white'>85%</div>
                  <p className='text-gray-300'>
                    Reduction in security incidents related to password breaches
                  </p>
                </div>
                <div className='border border-gray-700 p-6'>
                  <div className='text-4xl font-bold text-white'>92%</div>
                  <p className='text-gray-300'>
                    User satisfaction with the intuitive interface and ease of
                    access
                  </p>
                </div>
                <div className='border border-gray-700 p-6'>
                  <div className='text-4xl font-bold text-white'>3x</div>
                  <p className='text-gray-300'>
                    Faster database connection setup for enterprise users
                  </p>
                </div>
              </div>

              <p className='text-gray-300 leading-relaxed'>
                The Data Access Portal became Cyral&apos;s most adopted feature,
                with later expansion to S3 buckets becoming one of our most
                popular offerings. This work directly contributed to
                Cyral&apos;s ability to close larger enterprise deals. This
                project established the foundation for Cyral&apos;s unified data
                access strategy, with the design patterns I created being
                adopted across multiple product areas.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Spacer to push footer down */}
      <div className='flex-1'></div>
    </>
  );
}

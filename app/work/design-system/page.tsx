import Image from 'next/image';

export default function DesignSystem() {
  return (
    <>
      <section>
        <div className='p-6 space-y-6'>
          <header className='space-y-4'>
            <div>
              <h1 className='text-2xl font-semibold text-white'>
                Cyral Design Style Guide
              </h1>
              <p className='text-lg text-gray-300'>
                Establishing design consistency across Material UI components
              </p>
            </div>

            {/* Cover Image */}
            <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
              <Image
                src='/cyral_style_guide.png'
                alt='Cyral Design Style Guide'
                width={1200}
                height={600}
                className='w-full h-auto'
              />
            </div>

            {/* Project Details */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
              <div>
                <span className='text-gray-400 block mb-2'>Duration</span>
                <span className='text-gray-300'>4 months</span>
              </div>
              <div>
                <span className='text-gray-400 block mb-2'>Platform</span>
                <span className='text-gray-300'>
                  Web Application & Design Tools
                </span>
              </div>

              <div>
                <span className='text-gray-400 block text-sm mb-2'>Team</span>
                <p className='text-gray-300 text-sm'>
                  Lead Designer (me), 2 Front-end Engineers, VP of Engineering
                </p>
              </div>
            </div>
          </header>

          {/* Content Sections */}
          <div className='space-y-8'>
            {/* The Challenge */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>The Challenge</h2>
              <p className='text-gray-300 leading-relaxed'>
                During my time intially contracting for Cyral, I found
                typography font choices and text sizing varied throughout the
                product. Color usage beyond the primary blue was inconsistent,
                with subtle hex value variations that looked similar but were
                technically different. Spacing between visual elements lacked
                standardization, and buttons and text boxes had visual
                differences in border radius, creating a mix of circular and
                rectangular elements. The lack of a standardized design language
                not only created visual inconsistencies in the user experience,
                but also created substantial friction for engineering workflows
                and team growth.
              </p>

              <ul className='space-y-4'>
                <li>
                  <h3 className='text-white font-medium'>
                    1. Engineering Impact
                  </h3>
                  <p className='text-gray-300'>
                    The front-end team was spending considerable time converting
                    low-fidelity wireframes from Google Slides into usable
                    experiences. In the fast-paced startup environment,
                    functionality was prioritized over form, leaving stylistic
                    decisions to engineers who lacked design guidelines. Each
                    engineer made individual styling choices without
                    communication or standards, and engineers were hesitant to
                    create reusable components without solid experience in
                    usability and accessibility guidelines.
                  </p>
                </li>
                <li>
                  <h3 className='text-white font-medium'>
                    2. Onboarding Friction
                  </h3>
                  <p className='text-gray-300'>
                    New team members faced an intimidating and overwhelming
                    experience with no visual design guidelines. One front-end
                    engineer hired before the style guide struggled
                    significantly, constantly asking which styles to use for new
                    features. In contrast, two engineers hired after
                    implementing the style guide had much smoother onboarding
                    experiences.
                  </p>
                </li>
              </ul>
            </section>

            {/* My Approach */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>My Approach</h2>

              <div className='space-y-4'>
                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Strategic Prioritization
                  </h3>

                  <p className='text-gray-300'>
                    Rather than stopping feature development for systematic
                    cleanup, I implemented a pragmatic approach: defining
                    critical styles (spacing, typography, buttons, inputs) and
                    implementing them into new features while allowing existing
                    inconsistencies to remain until refactoring opportunities
                    arose. I took personal responsibility to find time around
                    existing development cycles when initial executive buy-in
                    was limited.
                  </p>

                  {/* Image */}
                  <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
                    <Image
                      src='/style_guide_styles.png'
                      alt='Style Guide Styles'
                      width={1200}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Foundation-First Development
                  </h3>
                  <p className='text-gray-300'>
                    I established foundational styles and high-use components
                    (buttons, tables, iconography from Material UI, cards) as
                    the initial framework. Working closely with the VP of
                    Engineering and participating in CEO and systems architect
                    meetings, I ensured alignment between style guide
                    development and business priorities. The timing worked in
                    our favor—I created the style guide during a period where
                    our team was refactoring critical features, allowing us to
                    clean up popular product areas early.
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Material UI Decisions
                  </h3>
                  <p className='text-gray-300'>
                    Given reign over visual direction, I made strategic
                    decisions about customizing Material UI components while
                    balancing Cyral&apos;s enterprise security brand identity
                    with established usability patterns. Cyral&apos;s enterprise
                    security focus required a more professional, trustworthy
                    aesthetic than Material UI&apos;s default styling. We
                    customized the primary blue to be deeper and more
                    authoritative, and increased border radius on buttons for a
                    softer interface while maintaining professionalism. Material
                    UI&apos;s default data tables weren&apos;t suitable for
                    displaying complex database connection information, so we
                    heavily customized them, but we kept Material UI&apos;s form
                    validation patterns unchanged because they already met
                    accessibility standards.
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Documentation & Organization
                  </h3>
                  <p className='text-gray-300'>
                    I structured the complete style guide in Figma with
                    individual pages for different categories (typography,
                    shadows, colors, border styles, components, icons) plus a
                    changelog page. This enabled component instances to
                    propagate updates automatically across projects. I worked
                    closely with front-end leads to ensure the team stayed
                    informed of changes through the changelog and detailed Slack
                    communications—pragmatic solutions that worked for our small
                    3-4 person front-end team.
                  </p>

                  {/* Image */}
                  <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
                    <Image
                      src='/style_guide_changelog.png'
                      alt='Style Guide Changelog'
                      width={1200}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-white font-medium'>
                    Technical Collaboration
                  </h3>
                  <p className='text-gray-300'>
                    Close collaboration with engineering leads involved
                    converting design decisions into developer-friendly formats
                    (rem values, hex codes, pixel ranges) and walking through
                    product pages to identify critical components for reusable
                    development. We established practices for creating reusable
                    components that became an ongoing discussion based on
                    component usage frequency.
                  </p>
                </div>
              </div>
            </section>

            {/* Impact */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Impact</h2>

              {/* Image */}
              <div className='border border-gray-700 bg-gray-800/50 overflow-hidden'>
                <Image
                  src='/old_vs_new.png'
                  alt='Old vs New Comparison'
                  width={1200}
                  height={600}
                  className='w-full h-auto'
                />
              </div>

              <div className='space-y-6'>
                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Measurable Improvements:
                  </span>{' '}
                  While lacking formal quantitative metrics, the engineering
                  team consistently reported that the style guide reduced
                  development time by days for various features. Documentation
                  quality improved dramatically, moving from Google Slides
                  screenshots to professional Figma workflows with detailed
                  comments and component references. The shift in workflow
                  enabled increased breadth, depth, and quality of documentation
                  between design and engineering.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    System Maturity & Sustainability:
                  </span>{' '}
                  The style guide evolved significantly during my tenure, with
                  foundational styles remaining stable even after my departure.
                  The component library expanded substantially, and
                  documentation became more refined as component usage patterns
                  clarified through real-world application. The system&apos;s
                  persistence and continued growth after I left demonstrates
                  that we built sustainable foundations rather than
                  designer-dependent processes.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Onboarding Impact:
                  </span>{' '}
                  The contrast between pre- and post-style guide developer
                  onboarding experiences provided clear evidence of impact. New
                  hires could reference exact components and wireframes instead
                  of asking colleagues which styles to follow, making the
                  onboarding experience much smoother and less intimidating.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Long-term Evolution:
                  </span>{' '}
                  Eventually, we reached a steady state where the development
                  team could utilize best practices and create new features with
                  established components and styles without requiring
                  refactoring work. Component usage became clear based on
                  context, and the mature system enabled the team to work more
                  efficiently and consistently.
                </p>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className='space-y-4'>
              <h2 className='text-xl text-gray-400'>Key Takeaways</h2>
              <div className='space-y-6'>
                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Strategic Foundation Building:
                  </span>{' '}
                  Learning to balance immediate feature needs with long-term
                  systematic improvements taught me how to advocate for
                  foundational work in fast-paced environments while finding
                  pragmatic implementation paths.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Cross-functional Collaboration:
                  </span>{' '}
                  Building consensus between design standards and engineering
                  workflows required deep technical understanding and
                  collaborative problem-solving, including translating design
                  decisions into formats engineers could easily implement.
                </p>

                <p className='text-gray-300'>
                  <span className='text-white font-medium'>
                    Pragmatic Implementation:
                  </span>{' '}
                  Working within startup constraints showed me how to create
                  meaningful improvements without perfect processes, focusing on
                  solutions that work for the team and context rather than ideal
                  scenarios. Sometimes the right answer is &quot;good enough for
                  now&quot; with a plan to improve over time.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Spacer to push footer down */}
      <div className='flex-1'></div>
    </>
  );
}

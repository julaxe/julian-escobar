import { useState } from 'react';

const jobs = [
  {
    title: 'Game Developer',
    company: 'Creatubbles Canada Inc.',
    location: 'Toronto, Canada',
    range: 'November 2022 - Present',
    url: 'https://www.creatubbles.com/',
    html: `<ul>
<li><b>Led</b> the design and implementation of a reactive guidance system that validates user actions in real-time, ensuring a seamless learning curve for complex software tools.</li>
<li><b>Engineered</b> and deployed core gameplay modules—including a comprehensive melee combat system, a robust quest system, and a <b>Finite State Machine (FSM)</b> framework—to empower users to architect their own custom interactive experiences.</li>
<li><b>Overhauled</b> the Inventory System and Character Customization suite, introducing expanded personalization options and a more intuitive UI for younger audiences.</li>
<li><b>Authored a suite of featured mini-games</b> designed to showcase the platform's technical capabilities; successfully launched 4 of the top-performing titles on the platform.</li>
</ul>`,
  },
  {
    title: 'Head Coach Esports Varsity team',
    company: 'George Brown College',
    location: 'Toronto, ON',
    range: 'April 2022 - April 2023',
    url: 'https://athletics.georgebrown.ca/landing/index',
    html: `<ul>
<li><b>Founded</b> the college’s inaugural varsity esports program, spearheading the end-to-end recruitment of a 12-student roster and establishing the organizational framework for long-term competitive success.</li>
<li><b>Developed</b> and executed structured weekly curricula focused on high-pressure decision-making and cross-functional communication, utilizing iterative feedback loops to improve team performance.</li>
<li><b>Leveraged</b> match analytics and VOD reviews to identify systemic bottlenecks, implementing tactical adjustments that optimized team coordination and individual mechanical proficiency.</li>
</ul>`,
  },
  {
    title: 'Professional Gamer',
    company: 'Mad Lions',
    location: 'Bogota, COL',
    range: 'December 2018 - January 2020',
    url: 'https://madlions.com/',
    html: `<ul>
<li>Spearheaded the roster to its inaugural international qualification, securing <b>1st place</b> in cross-regional competition against top-tier organizations from Mexico and Costa Rica.</li>
<li>Recognized as <b>"Player of the Week"</b> on three separate occasions and ranked 2nd overall in league-wide MVP standings, demonstrating elite-level mechanical proficiency and consistency.</li>
<li>Secured back-to-back National Titles and earned the <b>"Best in Role"</b> distinction in the Golden League, validating a high-level mastery of macro-strategy and team coordination.</li>
</ul>`,
  },
  {
    title: 'Professional Gamer',
    company: 'Zaga Talent Gaming',
    location: 'Mexico City, MEX',
    range: 'January 2018 - June 2018',
    url: 'https://lol.fandom.com/wiki/ZAGA_Talent_Gaming',
    html: `<ul>
<li>Successfully navigated a high-intensity, live-in professional environment with a diverse team of 7, managing cultural nuances and <b>resolving complex interpersonal conflicts</b> to maintain team synergy.</li>
<li>Developed robust frameworks for separating professional obligations from personal life, ensuring a <b>healthy team dynamic</b> and sustainable <b>productivity during 10+ hour daily</b> training blocks.</li>
<li>Implemented strategic rest and recovery protocols to <b>prevent burnout</b>, demonstrating the self-regulation and discipline required for long-term success in high-pressure, competitive industries.</li>
</ul>`,
  },
  {
    title: 'Professional Gamer',
    company: 'Dash9 Gaming',
    location: 'Mexico City, MEX',
    range: 'January 2017 - June 2018',
    url: 'https://lol.fandom.com/wiki/Dash9_Gaming',
    html: `<ul>
<li>Secured <b>1st place</b> out of <b>500+ competing teams</b> in the regional qualifiers, successfully elevating the organization into Latin America’s premier professional league.</li>
<li><b>Collaborated with technical staff</b> to engineer a data-driven training framework, systematically adjusting performance variables and conducting post-iteration analysis to optimize team synergy and win rates.</li>
<li>Recognized as one of the <b>foundational professional e-sports athletes in Colombia</b>, contributing to the establishment of the professional gaming ecosystem within the national sports landscape.</li>
</ul>`,
  },
  {
    title: 'Full Stack Web Developer',
    company: 'S4ds Direct Selling',
    location: 'Medellin, COL',
    range: 'January 2015 - January 2017',
    url: 'https://www.s4ds.com/',
    html: `<ul>
<li><b>Developed and maintained</b> mission-critical web applications using Java, SQL, and JavaScript (jQuery), delivering robust features for high-traffic direct-selling platforms.</li>
<li>Reworked and modernized legacy application architectures to align with shifting <b>market trends</b> and specific client requirements, ensuring high scalability and user accessibility.</li>
<li>Collaborated with <b>Quality Assurance</b> teams to architect comprehensive test cases and automation scripts, while <b>researching</b> emerging software packages to integrate cutting-edge functionality into core products.</li>
</ul>`,
  },
];

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id="jobs" className="max-w-3xl mx-auto px-6 md:px-12 lg:px-24 py-24">
      <h2 className="section-heading mb-10">
        <span className="text-green font-mono text-xl mr-2 font-normal">02.</span>
        Where I've Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-lightest-navy relative min-w-[150px]">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTabId(i)}
              className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors duration-300 ${
                activeTabId === i
                  ? 'text-green bg-light-navy'
                  : 'text-slate hover:text-green hover:bg-light-navy/50'
              }`}
            >
              {job.company}
            </button>
          ))}
          <div
            className="absolute bottom-0 md:bottom-auto md:top-0 md:left-0 h-[2px] md:h-[44px] w-full md:w-[2px] bg-green transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateY(${activeTabId * 44}px)`,
            }}
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-lightest-slate mb-1">
            {jobs[activeTabId].title}{' '}
            <span className="text-green">
              @{' '}
              <a
                href={jobs[activeTabId].url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {jobs[activeTabId].company}
              </a>
            </span>
          </h3>
          <p className="text-slate font-mono text-sm mb-6">
            {jobs[activeTabId].range}
          </p>
          <div
            className="text-slate space-y-4 [&>ul]:list-none [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:mb-2 [&>ul>li::before]:content-['▹'] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:text-green"
            dangerouslySetInnerHTML={{ __html: jobs[activeTabId].html }}
          />
        </div>
      </div>
    </section>
  );
}

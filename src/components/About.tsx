import profilePic from '../images/julian-picture.jpg';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-24">
      <h2 className="section-heading mb-10">
        <span className="text-green font-mono text-xl mr-2 font-normal">01.</span>
        About Me
      </h2>
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 text-slate text-lg leading-relaxed space-y-4">
          <p>
            Hi, I’m Julian. My journey into development began in the high-stakes world of professional e-sports, where competing at a national level sparked a deep curiosity about the systems driving the experience. That competitive drive, combined with my engineering foundation, now fuels my passion for architecting complex, high-performance gameplay and tools for PC and web-based platforms.
          </p>
          <p>
            Fast-forward to today, and I’ve pivoted that competitive energy into engineering robust gaming systems. Most recently, I’ve been architecting an educational platform that empowers the next generation of developers to learn coding through game creation. My focus is on building accessible, intuitive frameworks—such as modular state machines and interactive tutorials—that lower the barrier to entry for complex technical concepts while maintaining high performance.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4 text-slate">
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">C#</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">C++</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">Unity</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">Unreal Engine 5</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">Lua</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">Data-oriented design</li>
          </ul>
        </div>
        <div className="lg:col-span-2 flex flex-col items-center gap-10 w-full">
          {/* Image */}
          <div className="relative group w-full max-w-[350px] mx-auto">
            <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 -z-10"></div>
            <div className="relative rounded overflow-hidden bg-green">
              <img
                src={profilePic}
                alt="Julian Escobar"
                className="w-full h-auto mix-blend-multiply filter grayscale hover:filter-none hover:mix-blend-normal transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

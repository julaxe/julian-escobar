import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const featuredProjects = [
  {
    title: 'SuperCode',
    tech: ['Unity', 'C#', 'Lua', 'Github', 'Blender', 'Figma'],
    github: null,
    external: 'https://www.creatubbles.com/',
    html: '<p>A 3D sandbox platform where users utilize real Lua to build worlds and solve puzzles. Architected a modular Combat System and Finite State Machine (FSM) framework. Also lead-developed a suite of educational "Challenges" and "Activities"</p>',
    image: 'https://i0.wp.com/makerfaire.com/wp-content/uploads/2024/01/SuperCode.jpg?fit=1668%2C1250&ssl=1',
  },
  {
    title: 'MNEMONIC',
    tech: ['Unreal 4', 'C++', 'Github', 'Scrum'],
    github: null,
    external: 'https://slept-in-games.itch.io/mnemonic',
    html: '<p>First person rogue-like game where the player must enter minds. Created the code architecture for the game, using a hierarchical state machine for the movement of the player (Parkour movement). Made also the gate, pick-ups and chests</p>',
    image: 'https://img.itch.zone/aW1hZ2UvMTM5NDM4NC84ODM5MDUwLnBuZw==/original/wvctFM.png',
  },
  {
    title: 'Onkan',
    tech: ['Unity', 'C#', 'Trello'],
    github: 'https://github.com/AquariuZ/Onkan',
    external: 'https://winterghost.itch.io/onkan',
    html: '<p>3D puzzle game inspired by the Aztecs where the player has to lead sacrifices to Altars. Created the save and load system, pushable pillars, Altars, Falling tiles, and Air elevator.</p>',
    image: 'https://img.itch.zone/aW1hZ2UvMTQ3Mzk2NS84NjA0MzI2LnBuZw==/original/ujpOBM.png',
  },
  {
    title: 'Experimental ECS Zombie Game',
    tech: ['Unity', 'C#', 'Blender', 'Unity DOTS', 'ECS'],
    github: 'https://github.com/julaxe/ECSZombieGame',
    external: 'https://github.com/julaxe/ECSZombieGame',
    html: '<p>Knowing that the gaming industry is evolving and in constant change, I wanted to be "ahead of the curve" and start learning DoD (Data-oriented design).</p><p>Unity has been experimenting with DoD in the last years, making a big update this 2022 in his Unity Dots package. That\'s why I wanted to start making different type of games and test the performance with this new way of programming (new in Video games). So far the results are amazing and I believe DoD will be a most in the future.</p>',
    image: 'https://user-images.githubusercontent.com/59695404/170833372-2fc7dd42-8a3d-4380-b97c-384d7b42d0f6.png',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-24">
      <h2 className="section-heading mb-16">
        <span className="text-green font-mono text-xl mr-2 font-normal">03.</span>
        Some Things I've Built
      </h2>

      <div className="space-y-32">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Image */}
            <div className="md:col-span-7 relative group">
              <a href={project.external || project.github || '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                <div className="relative rounded-xl overflow-hidden bg-green before:absolute before:inset-0 before:bg-navy/40 before:mix-blend-multiply before:z-10 group-hover:before:bg-transparent transition-all duration-500 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-video object-cover mix-blend-multiply filter grayscale group-hover:filter-none group-hover:mix-blend-normal transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="md:col-span-5 relative z-20 flex flex-col justify-center">
              <p className="text-green font-mono text-sm mb-2">Featured Project</p>
              <h3 className="text-lightest-slate text-2xl md:text-3xl font-bold mb-6">
                <a href={project.external || project.github || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                  {project.title}
                </a>
              </h3>

              <div
                className="bg-light-navy p-6 rounded-xl shadow-xl text-slate text-base mb-6 relative md:-ml-12 z-30"
                dangerouslySetInnerHTML={{ __html: project.html }}
              />

              <ul className="flex flex-wrap gap-4 font-mono text-sm text-light-slate mb-6">
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>

              <div className="flex items-center gap-4 text-lightest-slate">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                    <Github size={22} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

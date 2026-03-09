import { Github, ExternalLink, Folder } from 'lucide-react';

const otherProjects = [
  {
    title: '10 Seconds Game',
    tech: ['Unity', 'C#', 'Blender'],
    github: 'https://github.com/julaxe/GameJam-10seconds',
    external: 'https://julaxe.github.io/10SecondsGame/',
    html: '<p>2 day Game jam with the theme "10 seconds"</p>',
  },
  {
    title: 'Kindling Light Game',
    tech: ['Unreal 4', 'PS4/Xbox One', 'C++'],
    github: 'https://github.com/julaxe/Kindling-light',
    external: null,
    html: '<p>This game is a 3D puzzle platformer, where the player’s world is engulfed in darkness with dangerous creatures lurking about. The only way to survive is to collect any light source available.</p>',
  },
  {
    title: 'Stranded Wilson Game',
    tech: ['Unity', 'Android', 'C#'],
    github: 'https://github.com/julaxe/HairyPenguinGames-Survival',
    external: null,
    html: '<p>Survival game for mobile</p>',
  },
  {
    title: 'Hacking system mini game',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/julaxe/A4_Portfolio_HackingSystem',
    external: 'https://julaxe.github.io/Hacking-System/',
    html: '<p>Mini game where you have to find a sequence inside a grid where you can only select an slot between rows and columns.</p>',
  },
  {
    title: 'Match3 mini game',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/julaxe/Portfolio-A3-Match3',
    external: 'https://julaxe.github.io/Match3MiniGame/',
    html: '<p>Typical match3 mini game, you can change the difficulty and also look for a hint</p>',
  },
  {
    title: 'Lock picking mini game',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/julaxe/Portfolio-A2-LockPicking',
    external: 'https://julaxe.github.io/LockPicking-Mini-game/',
    html: '<p>Lock picking mini game, mostly used to open door locks.</p>',
  },
  {
    title: 'Mining mini game',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/julaxe/Portfolio-A1MiningGame',
    external: 'https://julaxe.github.io/MiningMiniGame/',
    html: '<p>Mining mini game, based on the mining pokemon mini game.</p>',
  },
  {
    title: 'Ubisoft Next Challenge 2022',
    tech: ['C++', 'OpenGL'],
    github: 'https://github.com/julaxe/UbisoftChallenge',
    external: null,
    html: '<p>Gravitar theme game made for Ubisoft Challenge</p>',
  },
  {
    title: 'Ubisoft Next Challenge 2021',
    tech: ['C++', 'OpenGL'],
    github: 'https://github.com/julaxe/Next_2021_Ubisoft',
    external: null,
    html: '<p>Tower Defense game made for Ubisoft Challenge</p>',
  },
];

export default function OtherProjects() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-24">
      <h2 className="text-3xl font-bold text-center text-lightest-slate mb-12">
        Other Noteworthy Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, i) => (
          <div
            key={i}
            className="bg-light-navy p-8 rounded shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col group"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-green">
                <Folder size={40} />
              </div>
              <div className="flex items-center gap-4 text-light-slate">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-lightest-slate mb-4 group-hover:text-green transition-colors">
              <a href={project.external || project.github || '#'} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>

            <div
              className="text-slate text-sm mb-8 flex-grow"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />

            <ul className="flex flex-wrap gap-3 font-mono text-xs text-light-slate mt-auto">
              {project.tech.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

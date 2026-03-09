import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-50">
      <ul className="flex flex-col gap-6 mb-6">
        <li>
          <a href="https://github.com/julaxe" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 block">
            <Github size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/julian-escobar-3b8b6a13b/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 block">
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/julaxe" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 block">
            <Twitter size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/julaxe/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 block">
            <Instagram size={20} />
          </a>
        </li>
      </ul>
      <div className="w-[1px] h-24 bg-slate"></div>
    </div>
  );
}

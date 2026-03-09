import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-center py-6 mt-24">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href="https://github.com/julaxe" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/julian-escobar-3b8b6a13b/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://twitter.com/julaxe" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
          <Twitter size={20} />
        </a>
        <a href="https://www.instagram.com/julaxe/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
          <Instagram size={20} />
        </a>
      </div>
      <p className="text-slate font-mono text-xs hover:text-green transition-colors">
        <a href="https://github.com/julaxe" target="_blank" rel="noopener noreferrer">
          Built by Julian Escobar
        </a>
      </p>
      <p className="text-slate font-mono text-xs hover:text-green transition-colors"> 
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer">
          Inspired by Brittany Chiang
        </a>
      </p>
    </footer>
  );
}

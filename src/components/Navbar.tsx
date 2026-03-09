import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#jobs' },
    { name: 'Work', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full px-6 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        } ${
          isScrolled && !isOpen ? 'bg-navy/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-green font-mono text-xl font-bold tracking-tighter">
            <a href="/">JE</a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ol className="flex items-center gap-6 font-mono text-sm">
              {navLinks.map((link, i) => (
                <li key={i} className="text-slate hover:text-green transition-colors">
                  <a href={link.url}>
                    <span className="text-green mr-1">0{i + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green text-green rounded font-mono text-sm hover:bg-green-tint transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-green z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed inset-0 bg-light-navy z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <ol className="flex flex-col items-center gap-8 font-mono text-lg mb-10">
          {navLinks.map((link, i) => (
            <li key={i} className="text-slate hover:text-green transition-colors">
              <a href={link.url} onClick={() => setIsOpen(false)} className="flex flex-col items-center">
                <span className="text-green mb-1">0{i + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
        </ol>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-green text-green rounded font-mono text-lg hover:bg-green-tint transition-colors"
        >
          Resume
        </a>
      </div>
    </>
  );
}

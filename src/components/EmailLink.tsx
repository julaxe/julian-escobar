export default function EmailLink() {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-50">
      <div className="mb-6 rotate-90 origin-bottom">
        <a
          href="mailto:julaxe8@gmail.com"
          className="text-slate hover:text-green font-mono text-xs tracking-widest hover:-translate-x-1 transition-all duration-300 inline-block"
        >
          julaxe8@gmail.com
        </a>
      </div>
      <div className="w-[1px] h-24 bg-slate"></div>
    </div>
  );
}

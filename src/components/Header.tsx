import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "/assets/Updated-Sumit-Jha-Resume.pdf", external: true },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Name */}
        <div className="font-bold text-lg tracking-tight text-slate-800">Sumit Jha</div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  className={`transition-colors px-2 py-1 rounded hover:bg-slate-100 focus:outline-none ${
                    active === link.href ? "text-blue-600 font-semibold" : "text-slate-700"
                  }`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  className={`transition-colors px-2 py-1 rounded hover:bg-slate-100 focus:outline-none ${
                    active === link.href ? "text-blue-600 font-semibold" : "text-slate-700"
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-slate-800 rounded"></span>
          <span className="block w-6 h-0.5 bg-slate-800 rounded"></span>
          <span className="block w-6 h-0.5 bg-slate-800 rounded"></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                {link.external ? (
                  <a
                    className={`block w-full px-4 py-2 text-lg rounded hover:bg-slate-100 transition-colors ${
                      active === link.href ? "text-blue-600 font-semibold" : "text-slate-700"
                    }`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    className={`block w-full px-4 py-2 text-lg rounded hover:bg-slate-100 transition-colors ${
                      active === link.href ? "text-blue-600 font-semibold" : "text-slate-700"
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header; 
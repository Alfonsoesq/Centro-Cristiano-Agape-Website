import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/visitar", label: "Visitar" },
    { href: "/ver", label: "Ver" },
    { href: "/ofrendar", label: "Ofrendar" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        {/* Logo and Text */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/assets/logo-icon.png"
            alt="Centro Cristiano Agape Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl sm:text-2xl font-semibold text-gray-800 whitespace-nowrap">
            Centro Cristiano Agape
          </span>
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map(({ href, label }) => {
            const isActive = currentPath === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative group text-gray-800 hover:text-blue-600 transition
                    ${isActive ? "text-blue-600" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out
                      group-hover:w-full
                      ${isActive ? "w-full" : "w-0"}`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 flex flex-col gap-4 md:hidden font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-gray-800 hover:text-blue-600 transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

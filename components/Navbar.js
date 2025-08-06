export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">Centro Cristiano Agape</div>
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="/">Inicio</a></li>
        <li><a href="/visitar">Visitar</a></li>
        <li><a href="/ver">Ver</a></li>
        <li><a href="/ofrendar">Ofrendar</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
